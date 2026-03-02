<template>
    <div>
        <el-upload
            :action="API"
            ref="upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :auto-upload="false"
            :file-list="fileList"
            :limit="maxCount"
            :accept="acceptedExtensions.reduce((acc, cur) => acc + `.${cur},`, '')"
            multiple
            with-credentials
            :on-exceed="onExceed"
            :on-change="onChange"
            :on-remove="onRemove"
        >
            <i class="el-icon-plus"></i>
            <div slot="tip" class="el-upload__tip">
                最多上传 {{ maxCount }} 张 {{ acceptedExtensions.join(" / ").toUpperCase() }} 格式图片，单张图片不能超过
                {{ maxSize / 1024 / 1024 }} MB
            </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="60%" :src="dialogImageUrl" alt />
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import { __cms } from "@jx3box/jx3box-common/data/jx3box.json";
const API_Root = process.env.NODE_ENV === "production" ? __cms : "/";
const API = API_Root + "api/cms/upload";

export default {
    props: {
        fileMaxSize: {
            type: Number,
            default: 10,
        },
    },
    data() {
        return {
            API,
            dialogImageUrl: "",
            dialogVisible: false,
            fileList: [],
            successList: [],
            uploadedMap: {},
            uploading: false,

            acceptedExtensions: ["jpg", "jpeg", "png", "gif"],
            maxCount: 5,
            maxSize: this.fileMaxSize * 1024 * 1024,
        };
    },
    methods: {
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        onExceed() {
            this.$notify({
                title: "",
                message: `最多上传 ${this.maxCount} 张图片！`,
                type: "error",
                duration: 3000,
                position: "bottom-right",
            });
        },
        onChange(file, fileList) {
            this.fileList = fileList;
            if (file.status !== "ready" || !file.raw) return;

            const ext = (file.name.split(".").pop() || "").toLowerCase();
            if (!this.acceptedExtensions.includes(ext)) {
                this.$notify({
                    title: "",
                    message: `仅支持 ${this.acceptedExtensions.join(" / ").toUpperCase()} 格式图片！`,
                    type: "error",
                    duration: 3000,
                    position: "bottom-right",
                });
                this.removeFile(file.uid);
                return;
            }

            if (file.size > this.maxSize) {
                this.$notify({
                    title: "",
                    message: `单张图片大小不能超过 ${this.maxSize / 1024 / 1024} MB！`,
                    type: "error",
                    duration: 3000,
                    position: "bottom-right",
                });
                this.removeFile(file.uid);
                return;
            }
        },
        onRemove(file, fileList) {
            this.fileList = fileList;
            if (file?.uid && this.uploadedMap[file.uid]) this.$delete(this.uploadedMap, file.uid);
            this.successList = Object.values(this.uploadedMap);
        },
        async upload() {
            if (!this.fileList.length) {
                this.$emit("onFinish", []);
                return;
            }
            if (this.uploading) return;
            this.uploading = true;

            const pendingList = this.fileList.filter((file) => file.raw && !this.uploadedMap[file.uid]);
            try {
                for (const file of pendingList) {
                    const fdata = new FormData();
                    fdata.append("file", file.raw);
                    const res = await axios.post(API, fdata, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                        withCredentials: true,
                        auth: {
                            username: (localStorage && localStorage.getItem("token")) || "",
                            password: "cms common request",
                        },
                    });
                    if (res.data.code) throw new Error(res.data.msg || "图片上传失败!");
                    const url = res.data.data?.[0];
                    if (!url) throw new Error("上传返回数据异常");

                    this.$set(this.uploadedMap, file.uid, url);
                    file.url = url;
                    file.status = "success";
                }

                this.successList = this.fileList
                    .map((file) => this.uploadedMap[file.uid])
                    .filter(Boolean);
                this.$emit("onFinish", this.successList || []);
                this.fileList = [];
                this.successList = [];
                this.uploadedMap = {};
            } catch (err) {
                this.onError(err?.message || "图片上传失败!");
            } finally {
                this.uploading = false;
            }
        },
        onError(msg) {
            this.$notify({
                title: "",
                message: msg || "图片上传失败!",
                type: "error",
                duration: 3000,
                position: "bottom-right",
            });
            this.$emit("onError");
        },
        addFile(file) {
            this.$refs.upload.handleStart(file);
            return false;
        },
        removeFile(uid) {
            this.fileList = this.fileList.filter((item) => item.uid !== uid);
            if (uid && this.uploadedMap[uid]) this.$delete(this.uploadedMap, uid);
            this.successList = Object.values(this.uploadedMap);
        },
    },
};
</script>

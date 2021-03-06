<template>
    <el-container class="c-comment" v-loading="loading">
        <el-main>
            <CommentInputForm @submit="userSubmitInputForm" />
            <div class="c-comment-order">
                <span>排序模式：</span>
                <el-switch v-model="isDesc" @change="changeOrder"></el-switch>
                <b>{{isDesc ? '最后靠前':'最早靠前'}}</b>
            </div>
            <template v-if="isNormal">
                <div v-for="item in commentList" :key="item.id" class="c-comment-list">
                    <Avatar
                        :user-avatar="item.avatar | showAvatar"
                        :user-href="item.userId | profileLink"
                        :username="item.displayName"
                        :avatarFrame="item.user_avatar_frame"
                        :withFrame="true"
                    />
                    <CommmentWithReply
                        :base-api="baseAPI"
                        :item="item"
                        :category="category"
                        :power="commentPower"
                        @deteleComment="deteleComment"
                        :user-href="item.userId | profileLink"
                        :username="item.displayName"
                    />
                </div>

                <div class="c-comment-pages">
                    <CommentInputForm
                        @submit="userSubmitInputForm"
                        :isBottom="commentList.length > 5"
                        v-if="commentList.length > 5"
                    />
                    <div class="u-pages">
                        <el-pagination
                            style="text-align: right"
                            background
                            hide-on-single-page
                            @current-change="handleCurrentChange"
                            :current-page.sync="pager.index"
                            :page-size="pager.pageSize"
                            layout="prev, pager, next, total"
                            :total="pager.total"
                        ></el-pagination>
                    </div>
                </div>
            </template>
        </el-main>
    </el-container>
</template>

<script>
import { showAvatar, authorLink } from "@jx3box/jx3box-common/js/utils";
import Avatar from "./components/avatar.vue";
import CommentInputForm from "./components/comment-input-form.vue";
import CommmentWithReply from "./components/comment-with-reply.vue";
import { GET, POST, DELETE } from "./service";
import axios from "axios";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getOrderMode, setOrderMode } from "./options";
export default {
    name: "Comment",
    props: ["id", "category", "normal", "order"],
    components: {
        Avatar,
        CommmentWithReply,
        CommentInputForm,
    },
    data: function () {
        return {
            baseAPI: "",
            commentPower: {
                allow: false,
                uid: -1,
            },
            commentList: [],
            pager: {
                index: 1,
                pageSize: 10,
                pageTotal: 1,
                total: 0,
            },
            isDesc: this.order == "desc",
            loading : false
        };
    },
    computed: {
        isNormal: function () {
            return this.normal === undefined || this.normal;
        },
    },
    methods: {
        changeOrder() {
            this.reloadCommentList(this.pager.index);
            setOrderMode(this.isDesc ? "desc" : "asc");
        },
        deteleComment(id) {
            DELETE(`${this.baseAPI}/comment/${id}`)
                .then(() => {
                    this.$notify({
                        title: "",
                        message: "删除成功!",
                        type: "success",
                        duration: 3000,
                        position: "bottom-right",
                    });
                    this.reloadCommentList(this.pager.index);
                })
                .catch(() => {});
        },
        reloadCommentList(index) {
            this.loading = true
            let orderQuery = {};
            if (this.isDesc) {
                orderQuery["desc"] = true;
            }
            GET(`${this.baseAPI}/comment/page/${index}`, orderQuery)
                .then((resp) => {
                    this.commentList = resp.data || [];
                    this.pager = resp.page;
                })
                .catch(() => {})
                .finally(() => {
                    this.loading = false
                })
        },
        handleCurrentChange(gotoIndex) {
            this.reloadCommentList(gotoIndex);
        },
        userSubmitInputForm(data) {
            POST(`${this.baseAPI}/comment`, null, data)
                .then(() => {
                    this.$notify({
                        title: "",
                        message: "评论成功!",
                        type: "success",
                        duration: 3000,
                        position: "bottom-right",
                    });
                    // 位于第一页时才去更新数据,否则没必要,等用户自己触发
                    if (this.pager.index == 1) {
                        this.reloadCommentList(this.pager.index);
                    }
                })
                .catch(() => {});
        },
        loadFrames: function () {
            axios.get(__imgPath + "data/user_avatar_frame.json").then((res) => {
                if (res.data) {
                    this.$store.state.frames = res.data;
                }
            });
        },
    },
    filters: {
        profileLink: function (uid) {
            return authorLink(uid);
        },
        showAvatar: function (val) {
            return showAvatar(val, 48);
        },
    },
    created() {
        this.baseAPI = `/api/comment/${this.category}/article/${this.id}`;
    },
    mounted() {
        getOrderMode()
            .then((mode) => {
                this.isDesc = mode == "desc";
            })
            .then(() => {
                this.reloadCommentList(1);

                this.loadFrames();

                GET(`${this.baseAPI}/i-am-author`)
                    .then((power) => {
                        this.commentPower = power;
                    })
                    .catch(() => {});
            });
    },
};
</script>

<style lang="less">
.c-comment {
    font-size: 14px;
    .el-link {
        vertical-align: baseline !important;
    }
    .el-icon-circle-close {
        color: #fff !important;
    }
}
.u-uploader {
    margin-top: 10px;
}
.c-comment .el-main {
    padding: 0;
}
.c-comment-box {
    margin: 12px 0;
    border-bottom: 1px solid #eee;
    textarea {
        font-family: inherit;
    }
    .u-publish {
        float: right;
        margin-top: 10px;
    }
}

.c-comment-list {
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
}

.c-comment-pages {
    *zoom: 1;
    &:after {
        content: "";
        display: table;
        clear: both;
    }
    .u-quickreply {
        float: left;
        input {
            width: 360px;
        }
    }
    .u-pages {
        float: right;
    }
}
@media screen and (max-width: 1024px) {
    .c-comment-pages {
        .u-quickreply {
            float: none;
        }
        .u-form {
            display: flex;
        }
        .u-input {
            flex-grow: 1;
            .el-form-item__content {
                display: block;
            }
            input {
                width: 100%;
            }
        }
        .u-btn {
        }
    }
}
.c-comment-order {
    background-color: #fafbfc;
    padding: 8px 10px;
    border-radius: 3px;
    border: 1px solid #eee;
    margin: 10px 0;
    span {
        color: #666;
        margin-right: 10px;
    }
    b {
        color: #0366d6;
    }
}
.c-comment-emotion{
    max-height: 168px;
    overflow: auto;
}
</style>

<template>
    <div class="u-reply">
        <div class="u-reply-content">
            <span class="u-reply-label" v-if="replyForUserId != 0">
                回复
                <el-link type="primary" target="_blank" :href="userHref"
                    >@{{ replyForUsername }}</el-link
                >
                :
            </span>
            <p v-for="(p, index) in getPList(content)" :key="index" v-html="formatContent(p)"></p>
        </div>
        <div class="u-attachements" v-if="attachments.length">
            <el-image
                v-for="url in attachments"
                :key="url"
                :src="url | showAttachment"
                :preview-src-list="_attachments"
                lazy
            ></el-image>
        </div>
        <div class="u-toolbar">
            <el-button
                class="u-admin"
                v-if="canDelete"
                type="text"
                icon="el-icon-delete"
                size="mini"
                @click="deleteComment()"
                >删除</el-button
            >
            <el-button
                class="u-admin"
                v-if="canReply"
                type="text"
                icon="el-icon-chat-line-round"
                size="mini"
                @click="showReplyForReplyInput()"
                >回复</el-button
            >
            <time class="u-date">
                <i class="el-icon-time"></i>
                {{ dataFormat(date) }}
            </time>
        </div>
    </div>
</template>

<script>
import { resolveImagePath,authorLink } from "@jx3box/jx3box-common/js/utils";
import { formatContent } from '../utils'
function fillZero(num) {
    return num > 9 ? num : `0${num}`;
}
export default {
    props: [
        "commentId",
        "content",
        "attachments",
        "date",
        "hasReply",
        "canDelete",
        "canReply",
        "userHref",
        "replyForUsername",
        "replyForUserId",
    ],
    data: function() {
        return {
            showInput: false,
        };
    },
    computed : {
        _attachments : function (){
            return this.attachments.map((val) => {
                return resolveImagePath(val)
            })            
        }
    },
    filters: {
        profileLink: function(uid) {
            return authorLink(uid);
        },
        showAttachment : function (val){
            return resolveImagePath(val) + '?x-oss-process=style/comment_thumb'
        }
    },
    methods: {
        formatContent,
        getPList(content) {
            return content.split("\n");
        },
        deleteComment() {
            this.$emit("delete", this.commentId);
        },
        dataFormat(str) {
            let d = new Date(str);
            return (
                d.getFullYear() +
                "-" +
                fillZero(d.getMonth() + 1) +
                "-" +
                fillZero(d.getDate()) +
                " " +
                fillZero(d.getHours()) +
                ":" +
                fillZero(d.getMinutes()) +
                ":" +
                fillZero(d.getSeconds())
            );
        },
        showReplyForReplyInput() {
            this.$emit("showReplyInput");
        },
    },
};
</script>

<style lang="less">
.u-reply-content {
    p {
        padding: 0;
        margin: 0;
        line-height: 1.75;
        // white-space: pre-wrap;

        img {
            vertical-align: -3px;
        }
    }
}
</style>

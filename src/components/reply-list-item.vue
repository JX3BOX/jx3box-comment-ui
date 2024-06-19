<template>
    <el-row :style="decorationStyles">
        <!--用户头像-->
        <CommentAvatar
            :user-avatar="reply.avatar | showAvatar"
            :user-href="reply.userId | profileLink"
            :username="reply.displayName"
            :avatarFrame="reply.user_avatar_frame"
            :avatarSize="36"
        />
        <!--评论主体内容-->
        <CommentContentSimple
            :comment-id="reply.id"
            :date="reply.commentDate"
            :content="reply.content"
            :attachments="reply.attachments | stringToArray"
            :can-delete="power.can_del || power.uid == reply.userId"
            :can-hide="power.is_author == 1 || power.is_editor == 1"
            :can-reply="power.uid != reply.userId"
            :user-href="reply.replyForUID | profileLink"
            :reply-for-username="reply.replyForUsername"
            :reply-for-user-id="reply.replyForUID"
            :is-like="reply.is_likes == 1"
            :likes="~~reply.likes"
            @delete="deleteReply"
            @showReplyInput="showReplyForReplyFrom = !showReplyForReplyFrom"
            @setLikeComment="setLikeComment"
            @hide="hideReply"
        />
        <!--隐藏起来的回复评论的评论表单-->
        <ReplyForReply
            v-if="showReplyForReplyFrom"
            :username="reply.displayName"
            :user-href="reply.userId | profileLink"
            :current-id="reply.id"
            @hideForm="showReplyForReplyFrom = false"
            @doReply="doReply"
        />
    </el-row>
</template>

<script>
import { showAvatar, authorLink } from "@jx3box/jx3box-common/js/utils";
import CommentContentSimple from "./reply-list-item-comment-content-simple.vue";
import ReplyForReply from "./reply-list-item-reply-form.vue";
import CommentAvatar from "./avatar.vue";
import { $cms } from "@jx3box/jx3box-common/js/https";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
const DECORATION_KEY = "decoration_comment_";
export default {
    props: ["reply", "power"],
    components: {
        CommentAvatar,
        CommentContentSimple,
        ReplyForReply,
    },
    backReplyList: [],
    computed: {
        uid() {
            return this.reply.userId;
        },
        decorationStyles() {
            return this.decoration
                ? {
                      backgroundImage: `url(${this.decoration})`,
                      borderRadius: "8px",
                  }
                : null;
        },
    },
    data: function () {
        return {
            showReplyForReplyFrom: false,
            decoration: "",
        };
    },
    filters: {
        profileLink: function (uid) {
            return authorLink(uid);
        },
        stringToArray: function (str) {
            if (!str) {
                return [];
            }
            return JSON.parse(str);
        },
        showAvatar: function (val) {
            return showAvatar(val, 84);
        },
    },
    mounted() {
        this.getDecoration();
    },
    methods: {
        deleteReply(id) {
            this.$emit("deleteReply", id);
        },
        hideReply(id) {
            this.$emit("hide", id);
        },
        setLikeComment(setLike) {
            this.$emit("setLikeComment", this.reply.id, setLike);
        },
        doReply(replyData) {
            (replyData.replyForUID = this.reply.userId),
                (replyData.replyForCommentId = this.reply.id),
                this.$emit("addReply", replyData);
            this.showReplyForReplyFrom = false;
        },
        setDecoration(decoration) {
            this.decoration =
                __imgPath + `decoration/images/${decoration.val}/comment.png`;
        },
        getDecoration() {
            let decoration_local = sessionStorage.getItem(
                DECORATION_KEY + this.uid
            );
            if (decoration_local) {
                //解析本地缓存
                let decoration_parse = JSON.parse(decoration_local);
                if (decoration_parse) {
                    this.setDecoration(decoration_parse);
                    return;
                }
            }
            this.fetchDecoration({
                using: 1,
                user_id: this.uid,
                type: "comment",
            }).then((res) => {
                let decorationList = res.data.data;
                //筛选个人装扮
                let decoration = decorationList.find(
                    (item) => item.type == "comment"
                );
                if (decoration) {
                    this.setDecoration(decoration);
                    sessionStorage.setItem(
                        DECORATION_KEY + this.uid,
                        JSON.stringify(decoration)
                    );
                    return;
                }
            });
        },
        //获取装扮
        fetchDecoration(params) {
            return $cms().get(`/api/cms/user/decoration`, {
                params: params,
            });
        },
    },
};
</script>

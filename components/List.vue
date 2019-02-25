<template>
  <a-list
    itemLayout="vertical"
    size="large"
    :pagination="pagination"
    :dataSource="articles"
    :loading="false"
  >
    <div slot="footer"><b>ant design vue</b> footer part</div>
    <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
      <template slot="actions" v-for="{ type, text } in item.actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img
        slot="extra"
        width="272"
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
      />
      <a-list-item-meta :description="item.brief">
        <a slot="title" :href="item.href">{{ item.title }}</a>
        <!-- <a-avatar slot="avatar" :src="item.avatar" /> -->
      </a-list-item-meta>
      <!-- {{ item.content }} -->
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  data() {
    return {
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      },
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" }
      ],
      articleList: []
    };
  },
  props: ["articles"],
  watch: {
    articles(data) {
      data.map(info => {
        let { star, praise, evaluate } = info;
        info.actions = [
          { type: "star-o", text: star },
          { type: "like-o", text: praise },
          { type: "message", text: evaluate || 0 }
        ];
      });
      this.articleList = data;
    }
  }
};
</script>

<style lang="scss">
</style>

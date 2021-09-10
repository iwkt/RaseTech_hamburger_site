const appdata = {
    data(){
      return {
        items: [
          {
            sn:1,
            title: 'ポンプ・システム',
            subtitle: [
              '製品・サービス',
              'キャンドモータポンプ',
              '往復動ポンプ（定量ポンプ）',
              'ゴーマン・ラップポンプ',
              'aiueo極低温用サブマージド',
            ]
          },
          {
            sn: 2,
            title: '産業用機器',
            subtitle: [
              '製品・サービス',
              '発電所用水質調整装置',
              'セラミック基板製造システム',
              '冷間等法圧プレス',
            ]
          },
          {
            sn: 3,
            title: '航空宇宙',
            subtitle: [
              // '製品・サービス',
              // '製産・開発体制',
              // '往復動ポンプ（定量ポンプ）',
              // 'ゴーマン・ラップポンプ',
              // 'aiueo極低温用サブマージド',
            ]
          },
        ],
      }
    },
    components:{
      menuJs:{
        props:{
          obj:{
            type:Object
          }
        },
        template:`
        <li>
          <a class="acd_parent">{{obj.title}}</a>
            <ul class="acd_child">
              <li v-for="item in obj.subtitle">
                <a>{{ item }}</a>
              </li>
            </ul>
        </li>
        `
      }
    }  
  }
  
  const app = Vue.createApp(appdata)
  app.mount('#app')
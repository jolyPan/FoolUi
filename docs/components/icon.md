# Icon 图标 和 Grid 栅格
----
#### 基础用法
<vuep  :options="{ tabSize: 2 }"  template="#example"></vuep>

### 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click     | 点击事件   | - |


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| href     | 超链接   | String  |    — | -   |

<script v-pre type="text/x-template" id="example">
  <template>
    <div>
        <f-grids row="3">
        <f-grid href="https://github.com/jolyPan/FoolUi">
          <span slot="icon" class="fool__icon--phone"></span>
          <span slot="text">phone</span>
        </f-grid>
        <f-grid @click="gridClick">
          <span slot="icon" class="fool__icon--lbs"></span>
          <span slot="text">lbs</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--qrcode"></span>
          <span slot="text">qrcode</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--date"></span>
          <span slot="text">date</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--nochecked"></span>
          <span slot="text">nochecked</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--checked"></span>
          <span slot="text">checked</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--radio"></span>
          <span slot="text">radio</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--search"></span>
          <span slot="text">search</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--close-outline"></span>
          <span slot="text">close-outline</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--close"></span>
          <span slot="text">close</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--homefill"></span>
          <span slot="text">homefill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--home"></span>
          <span slot="text">home</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--myfill"></span>
          <span slot="text">myfill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--my"></span>
          <span slot="text">my</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--userfill"></span>
          <span slot="text">userfill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--user"></span>
          <span slot="text">user</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--contact"></span>
          <span slot="text">contact</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--link"></span>
          <span slot="text">link</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--unlock"></span>
          <span slot="text">unlock</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--lock"></span>
          <span slot="text">lock</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--likefill"></span>
          <span slot="text">likefill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--like"></span>
          <span slot="text">like</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--reduce-outline"></span>
          <span slot="text">reduce-outline</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--reduce"></span>
          <span slot="text">reduce</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--add-outline"></span>
          <span slot="text">add-outline</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--add"></span>
          <span slot="text">add</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--edit"></span>
          <span slot="text">edit</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--delete"></span>
          <span slot="text">delete</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--photodel"></span>
          <span slot="text">photodel</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--photo"></span>
          <span slot="text">photo</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--msgfill"></span>
          <span slot="text">msgfill</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--msg"></span>
          <span slot="text">msg</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--menumore"></span>
          <span slot="text">menumore</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--menu"></span>
          <span slot="text">menu</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--tips"></span>
          <span slot="text">tips</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--refresh"></span>
          <span slot="text">refresh</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--share"></span>
          <span slot="text">share</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--totop"></span>
          <span slot="text">totop</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--attachment"></span>
          <span slot="text">attachment</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--emoji"></span>
          <span slot="text">emoji</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--scan"></span>
          <span slot="text">scan</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--mall"></span>
          <span slot="text">mall</span>
        </f-grid>

        <f-grid>
          <span slot="icon" class="fool__icon--filter"></span>
          <span slot="text">filter</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--sort"></span>
          <span slot="text">sort</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--loading"></span>
          <span slot="text">loading</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--left"></span>
          <span slot="text">left</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--right"></span>
          <span slot="text">right</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--up"></span>
          <span slot="text">up</span>
        </f-grid>
        <f-grid>
          <span slot="icon" class="fool__icon--down"></span>
          <span slot="text">down</span>
        </f-grid>
      </f-grids>
    </div>
  </template>
  <script>
    export default {
      data: function () {
        return {
        }
      },
      methods: {
        gridClick() {
          alert(1);
        },
      }
    }
  </script>
</script>
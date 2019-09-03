### 弟弟的第三天

#### Vue键盘事件及键值修饰符（alt：enter）

- 在监听键盘事件时，Vue允许为v-on在监听键盘事件时添加按键修饰符

- 键盘事件是在你可以输入的地方触发的

- <!--只有在'key'是'Enter'时调用'logNme(js中的一个方法)'这个方法-->

  `<input type="text" v-on:keyup.enter="logName">`

- <!--请注意修饰键与常规按键不同，在和 'keyup' 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 'alt' 的情况下释放其它按键，才能触发 'keyup.alt'。而单单释放 'alt' 也不会触发事件。-->

  `<input type="text" v-on:keyup.alt.enter="logAge">`


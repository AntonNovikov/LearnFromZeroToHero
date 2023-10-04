v-html

v-on: === @
v-bind:   ===  :
v-slot: === #

v-model: = v-on: + v-bind:


v-model: = :model-value + @update:model-value (custom component)

v-if
v-else

v-show  (display:none)

v-for
"(X, index) in xS"
:key="x"
@click="function(index)"


@click.stop


!use v-for and v-if . use a wrapper with v-if instead

https://vuejs.org/style-guide/


npm i --save vue-router@next

 this.$route.path
 this.$route.params
this.$route.query


npm install --save vuex@next
## Deploy
package.json
``` json
"scripts": {
"build": "vue-cli-service build"
}
```

import{_ as s,o as e,c as o,a}from"./app.f643a53b.js";const t={},n=a(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="moduleappactivity-class" tabindex="-1"><a class="header-anchor" href="#moduleappactivity-class" aria-hidden="true">#</a> ModuleAppActivity <span class="symbol">- class</span></h1><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">open</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ModuleAppActivity</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Activity</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u4EE3\u7406 <code>Activity</code>\u3002</p></blockquote><p>\u7EE7\u627F\u4E8E\u6B64\u7C7B\u7684 <code>Activity</code> \u53EF\u4EE5\u540C\u65F6\u5728\u5BBF\u4E3B\u4E0E\u6A21\u5757\u4E2D\u542F\u52A8\u3002</p><p>\u5728 (Xposed) \u5BBF\u4E3B\u73AF\u5883\u9700\u8981\u5728\u5BBF\u4E3B\u542F\u52A8\u65F6\u8C03\u7528 <code>Context.registerModuleAppActivities</code> \u8FDB\u884C\u6CE8\u518C\u3002</p><h2 id="proxyclassname-field" tabindex="-1"><a class="header-anchor" href="#proxyclassname-field" aria-hidden="true">#</a> proxyClassName <span class="symbol">- field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">open</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> proxyClassName</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.10</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>\u8BBE\u7F6E\u5F53\u524D\u4EE3\u7406\u7684 <code>Activity</code> \u7C7B\u540D\u3002</p></blockquote><p>\u7559\u7A7A\u5219\u4F7F\u7528 <code>Context.registerModuleAppActivities</code> \u65F6\u8BBE\u7F6E\u7684\u7C7B\u540D</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>\u4EE3\u7406\u7684 <strong>Activity</strong> \u7C7B\u540D\u5FC5\u987B\u5B58\u5728\u4E8E\u5BBF\u4E3B\u7684 AndroidMainifest \u6E05\u5355\u4E2D\u3002</p></div>`,17),c=[n];function p(l,i){return e(),o("div",null,c)}const d=s(t,[["render",p],["__file","ModuleAppActivity.html.vue"]]);export{d as default};

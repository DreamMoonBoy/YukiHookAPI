import{_ as s,o as e,c as o,a}from"./app.78a03919.js";const n={},l=a(`<h1 id="debug-logs" tabindex="-1"><a class="header-anchor" href="#debug-logs" aria-hidden="true">#</a> Debug Logs</h1><blockquote><p>Log is the most important part of the debugging process, <code>YukiHookAPI</code> encapsulates a set of stable and efficient debugging log functions for developers.</p></blockquote><h2 id="normal-logs" tabindex="-1"><a class="header-anchor" href="#normal-logs" aria-hidden="true">#</a> Normal Logs</h2><p>You can call <code>loggerD</code>, <code>loggerI</code>, <code>loggerW</code> to print normal logs to the console.</p><p>The usage method is as follows.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">loggerD(msg </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;This is a log&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>At this point, <code>YukiHookAPI</code> will call <code>android.util.Log</code> and <code>XposedBridge.log</code> to print this log at the same time.</p><p>The default <code>TAG</code> of the log is the value you set in <code>YukiHookLogger.Configs.tag</code>.</p><p>You can also customize this value dynamically, but it is not recommended to modify <code>TAG</code> easily to prevent logs from being filtered.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">loggerD(tag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YukiHookAPI&quot;</span><span style="color:#ADBAC7;">, msg </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;This is a log&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The printed result is as shown below.</p><blockquote><p>The following example</p></blockquote><div class="language-text ext-text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">[YukiHookAPI][D][host package name]--&gt; This is a log</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>You can also use <code>LoggerType</code> to customize the type of log printing.</p><p>You can choose to use <code>android.util.Log</code> or <code>XposedBridge.log</code> to print logs.</p><p>The default type is <code>LoggerType.BOTH</code>, which means that both methods are used to print logs.</p><p>For example we only use <code>android.util.Log</code> to print logs.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">loggerD(tag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YukiHookAPI&quot;</span><span style="color:#ADBAC7;">, msg </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;This is a log&quot;</span><span style="color:#ADBAC7;">, type </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">LoggerType</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">LOGD</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or just use <code>XposedBridge.log</code> to print the log, this method can only be used in the (Xposed) Host environment.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">loggerD(tag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YukiHookAPI&quot;</span><span style="color:#ADBAC7;">, msg </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;This is a log&quot;</span><span style="color:#ADBAC7;">, type </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">LoggerType</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">XPOSEDBRIDGE</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you want to intelligently distinguish the (Xposed) Host environment from the Module environment, you can write it in the following form.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">loggerD(tag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YukiHookAPI&quot;</span><span style="color:#ADBAC7;">, msg </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;This is a log&quot;</span><span style="color:#ADBAC7;">, type </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">LoggerType</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">SCOPE</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In this way, the API will intelligently select the specified method type to print this log in different environments.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For more functions, please refer to <a href="../public/com/highcapable/yukihookapi/hook/log/LoggerFactory#loggerd-method">loggerD</a>, <a href="../public/com/highcapable/yukihookapi/hook/log/LoggerFactory#loggeri-method">loggerI</a> and <a href="../public/com/highcapable/yukihookapi/hook/log/LoggerFactory#loggerw-method">loggerW</a> methods.</p></div><h2 id="error-logs" tabindex="-1"><a class="header-anchor" href="#error-logs" aria-hidden="true">#</a> Error Logs</h2><p>You can call <code>loggerE</code> to print <code>E</code> level logs to the console.</p><p>The usage method is as follows.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">loggerE(msg </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;This is an error&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The error log is the highest level, regardless of whether you have filtered only <code>E</code> level logs.</p><p>For error-level logging, you can also append an exception stack.</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// Assume this is the exception that was thrown</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> throwable </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">(...)</span></span>
<span class="line"><span style="color:#768390;">// Print log</span></span>
<span class="line"><span style="color:#ADBAC7;">loggerE(msg </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;This is an error&quot;</span><span style="color:#ADBAC7;">, e </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> throwable)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The printed result is as shown below.</p><blockquote><p>The following example</p></blockquote><div class="language-text ext-text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">[YukiHookAPI][E][host package name]--&gt; This is an error</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>At the same time, the log will help you print the entire exception stack.</p><blockquote><p>The following example</p></blockquote><div class="language-text ext-text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">java.lang.Throwable</span></span>
<span class="line"><span style="color:#adbac7;">        at com.demo.Test.&lt;init&gt;(...)</span></span>
<span class="line"><span style="color:#adbac7;">        at com.demo.Test.doTask(...)</span></span>
<span class="line"><span style="color:#adbac7;">        at com.demo.Test.stop(...)</span></span>
<span class="line"><span style="color:#adbac7;">        at com.demo.Test.init(...)</span></span>
<span class="line"><span style="color:#adbac7;">        at a.a.a(...)</span></span>
<span class="line"><span style="color:#adbac7;">        ... 3 more</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>In the error log, you can also use <code>LoggerType</code> to specify the method type currently used to print the log.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For more functions, please refer to the <a href="../public/com/highcapable/yukihookapi/hook/log/LoggerFactory#loggere-method">loggerE</a> method.</p></div><h2 id="save-logs-and-custom-elements" tabindex="-1"><a class="header-anchor" href="#save-logs-and-custom-elements" aria-hidden="true">#</a> Save Logs and Custom Elements</h2><p>You can save all currently printed logs directly to a file using the <code>YukiHookLogger.saveToFile</code> method.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// Please note</span></span>
<span class="line"><span style="color:#768390;">// The saved file path must have read and write permissions</span></span>
<span class="line"><span style="color:#768390;">// Otherwise an exception will be thrown</span></span>
<span class="line"><span style="color:#F69D50;">YukiHookLogger</span><span style="color:#ADBAC7;">.saveToFile(</span><span style="color:#96D0FF;">&quot;/sdcard/Documents/debug_log.log&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also use <code>YukiHookLogger.contents</code> to get all the log file contents that have been printed so far.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// Get the contents of all log files that have been printed so far</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> fileContent </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiHookLogger</span><span style="color:#ADBAC7;">.contents</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you need an array of real-time log data structures, you can directly get the content of <code>YukiHookLogger.inMemoryData</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// Get the currently printed real-time log data structure array</span></span>
<span class="line"><span style="color:#F69D50;">YukiHookLogger</span><span style="color:#ADBAC7;">.inMemoryData.forEach {</span></span>
<span class="line"><span style="color:#ADBAC7;">     it.timestamp </span><span style="color:#768390;">// Get timestamp</span></span>
<span class="line"><span style="color:#ADBAC7;">     it.time </span><span style="color:#768390;">// Get UTC time</span></span>
<span class="line"><span style="color:#ADBAC7;">     it.priority </span><span style="color:#768390;">// Get priority</span></span>
<span class="line"><span style="color:#ADBAC7;">     it.msg </span><span style="color:#768390;">// Get message</span></span>
<span class="line"><span style="color:#ADBAC7;">     it.throwable </span><span style="color:#768390;">// Get exception</span></span>
<span class="line"><span style="color:#ADBAC7;">     </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above features require <code>YukiHookLogger.Configs.isRecord</code> to be enabled.</p><p>You can also use <code>YukiHookLogger.Configs.elements</code> to customize the elements that debug logs display externally.</p><p>This function requires <code>YukiHookAPI.Configs</code> to be configured in <code>onInit</code> of the Hook entry class.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onInit</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> configs {</span></span>
<span class="line"><span style="color:#ADBAC7;">    debugLog {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        elements(</span><span style="color:#F69D50;">TAG</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">PRIORITY</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">PACKAGE_NAME</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">USER_ID</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For more functions, please refer to <a href="../public/com/highcapable/yukihookapi/hook/log/LoggerFactory#inmemorydata-field">YukiHookLogger.inMemoryData</a>, <a href="../public/com/highcapable/yukihookapi/hook/log/LoggerFactory#contents-field">YukiHookLogger.contents</a>, <a href="../public/com/highcapable/yukihookapi/hook/log/LoggerFactory#savetofile-method">YukiHookLogger.saveToFile</a> methods and <a href="../public/com/highcapable/yukihookapi/hook/log/LoggerFactory#configs-object">YukiHookLogger.Configs</a>.</p></div>`,61),p=[l];function t(i,c){return e(),o("div",null,p)}const d=s(n,[["render",t],["__file","logger.html.vue"]]);export{d as default};
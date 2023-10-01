import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a9d1f0e8.js";const u=JSON.parse('{"title":"联合类型","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"basic/union.md","filePath":"basic/union.md","lastUpdated":1696126649000}'),p={name:"basic/union.md"},o=l(`<h1 id="联合类型" tabindex="-1">联合类型 <a class="header-anchor" href="#联合类型" aria-label="Permalink to &quot;联合类型&quot;">​</a></h1><p>联合类型(union)，它实际上用户定义的一种特殊的类型，划分出一块内存空间用来存储多种类型，但同一时间只能存储一个类型。</p><p>联合类型的基本使用：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ZQ4kk" id="tab-o5oQmsA" checked="checked"><label for="tab-o5oQmsA">default</label><input type="radio" name="group-ZQ4kk" id="tab-9dZDQoq"><label for="tab-9dZDQoq">more</label></div><div class="blocks"><div class="language-zig vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Payload</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">union</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">i64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">float</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">f64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">boolean</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;"> = </span><span style="color:#FFAB70;">Payload</span><span style="color:#E1E4E8;">{ .</span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">1234</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,.{</span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Payload</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">union</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">int</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">i64</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">float</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">f64</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">boolean</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#E36209;">payload</span><span style="color:#24292E;"> = </span><span style="color:#E36209;">Payload</span><span style="color:#24292E;">{ .</span><span style="color:#E36209;">int</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">1234</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;{}</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">,.{</span><span style="color:#E36209;">payload</span><span style="color:#24292E;">.</span><span style="color:#E36209;">int</span><span style="color:#24292E;">});</span></span></code></pre></div><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">print</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">@import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;std&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#FFAB70;">debug</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">print</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Payload</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">union</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">i64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">float</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">f64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">boolean</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">!void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;"> = </span><span style="color:#FFAB70;">Payload</span><span style="color:#E1E4E8;">{ .</span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">1234</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, .{</span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">print</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">@import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;std&quot;</span><span style="color:#24292E;">).</span><span style="color:#E36209;">debug</span><span style="color:#24292E;">.</span><span style="color:#E36209;">print</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Payload</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">union</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">int</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">i64</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">float</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">f64</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">boolean</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">!void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#E36209;">payload</span><span style="color:#24292E;"> = </span><span style="color:#E36209;">Payload</span><span style="color:#24292E;">{ .</span><span style="color:#E36209;">int</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">1234</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;{}</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, .{</span><span style="color:#E36209;">payload</span><span style="color:#24292E;">.</span><span style="color:#E36209;">int</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,4),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{u as __pageData,A as default};

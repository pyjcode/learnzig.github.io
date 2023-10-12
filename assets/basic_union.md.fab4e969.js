import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.a9d1f0e8.js";const u=JSON.parse('{"title":"联合类型","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"basic/union.md","filePath":"basic/union.md","lastUpdated":1697100747000}'),l={name:"basic/union.md"},o=p(`<h1 id="联合类型" tabindex="-1">联合类型 <a class="header-anchor" href="#联合类型" aria-label="Permalink to &quot;联合类型&quot;">​</a></h1><p>联合类型(union)，它实际上用户定义的一种特殊的类型，划分出一块内存空间用来存储多种类型，但同一时间只能存储一个类型。</p><p>联合类型的基本使用：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LklU4" id="tab-B-OVqPk" checked="checked"><label for="tab-B-OVqPk">default</label><input type="radio" name="group-LklU4" id="tab-cpFl5v3"><label for="tab-cpFl5v3">more</label></div><div class="blocks"><div class="language-zig vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Payload</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">union</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">i64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">float</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">f64</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">boolean</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;"> = </span><span style="color:#FFAB70;">Payload</span><span style="color:#E1E4E8;">{ .</span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">1234</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者是让 zig 编译期进行推倒</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">payload_1</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">Payload</span><span style="color:#E1E4E8;"> = .{ .</span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">1234</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,.{</span><span style="color:#FFAB70;">payload</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Payload</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">union</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">int</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">i64</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">float</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">f64</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">boolean</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#E36209;">payload</span><span style="color:#24292E;"> = </span><span style="color:#E36209;">Payload</span><span style="color:#24292E;">{ .</span><span style="color:#E36209;">int</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">1234</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者是让 zig 编译期进行推倒</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#E36209;">payload_1</span><span style="color:#24292E;">: </span><span style="color:#E36209;">Payload</span><span style="color:#24292E;"> = .{ .</span><span style="color:#E36209;">int</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">1234</span><span style="color:#24292E;"> };</span></span>
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
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">payload_1</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">Payload</span><span style="color:#E1E4E8;"> = .{ .</span><span style="color:#FFAB70;">int</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">1234</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
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
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#E36209;">payload_1</span><span style="color:#24292E;">: </span><span style="color:#E36209;">Payload</span><span style="color:#24292E;"> = .{ .</span><span style="color:#E36209;">int</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">1234</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;{}</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, .{</span><span style="color:#E36209;">payload</span><span style="color:#24292E;">.</span><span style="color:#E36209;">int</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>需要注意的是，zig 不保证普通联合类型在内存中的表现形式！如果有需要，可以使用 <code>extern union</code> 或者 <code>packed union</code> 来保证它遵守 c 的规则。</p></div><h2 id="枚举标记" tabindex="-1">枚举标记 <a class="header-anchor" href="#枚举标记" aria-label="Permalink to &quot;枚举标记&quot;">​</a></h2><p>联合类型可以在定义时使用枚举进行标记，类似<a href="./advanced_type/enum.html#标记类型">标记枚举</a>。你可以通过 <code>@as</code> 函数将联合类型作为生命的枚举来使用。</p><p>示例</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vK51z" id="tab-4_g4QbS" checked="checked"><label for="tab-4_g4QbS">default</label><input type="radio" name="group-vK51z" id="tab-FV2FprY"><label for="tab-FV2FprY">more</label></div><div class="blocks"><div class="language-zig vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ComplexTypeTag</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">ok</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">not_ok</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ComplexType</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">union</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ComplexTypeTag</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">ok</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">u8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">not_ok</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ComplexTypeTag</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">ok</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">not_ok</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ComplexType</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">union</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ComplexTypeTag</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">ok</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">u8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">not_ok</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">void</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">@import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;std&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">expect</span><span style="color:#E1E4E8;"> = </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">testing</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">expect</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ComplexTypeTag</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">ok</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">not_ok</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ComplexType</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">union</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ComplexTypeTag</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">ok</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">u8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">not_ok</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">!void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;"> = </span><span style="color:#FFAB70;">ComplexType</span><span style="color:#E1E4E8;">{ .</span><span style="color:#FFAB70;">ok</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">@as</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">ComplexTypeTag</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ComplexTypeTag</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">ok</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">std</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">@import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;std&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">expect</span><span style="color:#24292E;"> = </span><span style="color:#E36209;">std</span><span style="color:#24292E;">.</span><span style="color:#E36209;">testing</span><span style="color:#24292E;">.</span><span style="color:#E36209;">expect</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ComplexTypeTag</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">ok</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">not_ok</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ComplexType</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">union</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ComplexTypeTag</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">ok</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">u8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">not_ok</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">void</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">!void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">c</span><span style="color:#24292E;"> = </span><span style="color:#E36209;">ComplexType</span><span style="color:#24292E;">{ .</span><span style="color:#E36209;">ok</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">42</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">@as</span><span style="color:#24292E;">(</span><span style="color:#E36209;">ComplexTypeTag</span><span style="color:#24292E;">, </span><span style="color:#E36209;">c</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ComplexTypeTag</span><span style="color:#24292E;">.</span><span style="color:#E36209;">ok</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="extern-union" tabindex="-1"><code>extern union</code> <a class="header-anchor" href="#extern-union" aria-label="Permalink to &quot;\`extern union\`&quot;">​</a></h2><p><code>extern union</code> 保证内存布局与目标 C ABI 兼容。</p><p>具体可以见 <a href="./advanced_type/struct.html#extern"><code>extern struct</code></a>。</p><h2 id="packed-union" tabindex="-1"><code>packed union</code> <a class="header-anchor" href="#packed-union" aria-label="Permalink to &quot;\`packed union\`&quot;">​</a></h2><p><code>packed union</code> 保证内存布局和声明顺序相同并且尽量紧凑，具体见 <a href="./advanced_type/struct.html#packed"><code>extern struct</code></a>。</p>`,14),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const A=s(l,[["render",c]]);export{u as __pageData,A as default};

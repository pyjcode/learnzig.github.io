import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a9d1f0e8.js";const u=JSON.parse('{"title":"枚举","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"basic/advanced_type/enum.md","filePath":"basic/advanced_type/enum.md","lastUpdated":1695661217000}'),p={name:"basic/advanced_type/enum.md"},o=l(`<h1 id="枚举" tabindex="-1">枚举 <a class="header-anchor" href="#枚举" aria-label="Permalink to &quot;枚举&quot;">​</a></h1><blockquote><p>举常常用来列出一个有限集合的任何成员，或者对某一种特定对象的计数。</p></blockquote><p>枚举是一种相对简单，但用处颇多的类型。</p><h2 id="声明枚举" tabindex="-1">声明枚举 <a class="header-anchor" href="#声明枚举" aria-label="Permalink to &quot;声明枚举&quot;">​</a></h2><p>我们可以通过使用 <code>enum</code> 关键字来很轻松地声明并使用枚举：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Type</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">ok</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">not_ok</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;"> = </span><span style="color:#FFAB70;">Type</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">ok</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Type</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">ok</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">not_ok</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">c</span><span style="color:#24292E;"> = </span><span style="color:#E36209;">Type</span><span style="color:#24292E;">.</span><span style="color:#E36209;">ok</span><span style="color:#24292E;">;</span></span></code></pre></div><p>同时，zig 还允许我们访问并操作枚举的序列值：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 指定枚举的序列类型</span></span>
<span class="line"><span style="color:#6A737D;">// 现在我们可以在 u2 和 Value 这个枚举类型之中任意切换了</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Value</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">u2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">zero</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">one</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">two</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 指定枚举的序列类型</span></span>
<span class="line"><span style="color:#6A737D;">// 现在我们可以在 u2 和 Value 这个枚举类型之中任意切换了</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Value</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">u2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">zero</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">one</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">two</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>在此基础上，我们还可以覆盖枚举的序列值：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Value2</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">u32</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">hundred</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">thousand</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">million</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">1000000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 覆盖部分值</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Value3</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">u4</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">d</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Value2</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">u32</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">hundred</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">thousand</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">million</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">1000000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 覆盖部分值</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Value3</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">u4</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">a</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">b</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">c</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">d</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">e</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="枚举方法" tabindex="-1">枚举方法 <a class="header-anchor" href="#枚举方法" aria-label="Permalink to &quot;枚举方法&quot;">​</a></h2><p>没错，枚举也可以拥有方法，实际上枚举仅仅是一种命名空间（你可以看作是一类 struct ）。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Suit</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">clubs</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">spades</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">diamonds</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">hearts</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isClubs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">self</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">Suit</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">self</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Suit</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">clubs</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Suit</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">clubs</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">spades</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">diamonds</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">hearts</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isClubs</span><span style="color:#24292E;">(</span><span style="color:#E36209;">self</span><span style="color:#24292E;">: </span><span style="color:#E36209;">Suit</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#E36209;">self</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Suit</span><span style="color:#24292E;">.</span><span style="color:#E36209;">clubs</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="序列类型" tabindex="-1">序列类型 <a class="header-anchor" href="#序列类型" aria-label="Permalink to &quot;序列类型&quot;">​</a></h2><p>要注意的是，枚举的序列类型是会经过 zig 编译器进行严格的计算，如以上的枚举类型 <code>Type</code> ，它的序列类型只会是 <code>u1</code>。</p><p>以下示例中，我们使用了内置函数 <code>@typeInfo</code> 和 <code>@tagName</code> 来获取枚举的序列类型和对应的 name：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">@import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;std&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">expect</span><span style="color:#E1E4E8;"> = </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">testing</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">expect</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">mem</span><span style="color:#E1E4E8;"> = </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">mem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Small</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">one</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">two</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">three</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">four</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">!void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">@typeInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">Small</span><span style="color:#E1E4E8;">).</span><span style="color:#FFAB70;">Enum</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">tag_type</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">u2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">@typeInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">Small</span><span style="color:#E1E4E8;">).</span><span style="color:#FFAB70;">Enum</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">fields</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">len</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mem</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">eql</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">u8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">@typeInfo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">Small</span><span style="color:#E1E4E8;">).</span><span style="color:#FFAB70;">Enum</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">fields</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;two&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mem</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">eql</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">u8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">@tagName</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">Small</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">three</span><span style="color:#E1E4E8;">), </span><span style="color:#9ECBFF;">&quot;three&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">std</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">@import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;std&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">expect</span><span style="color:#24292E;"> = </span><span style="color:#E36209;">std</span><span style="color:#24292E;">.</span><span style="color:#E36209;">testing</span><span style="color:#24292E;">.</span><span style="color:#E36209;">expect</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">mem</span><span style="color:#24292E;"> = </span><span style="color:#E36209;">std</span><span style="color:#24292E;">.</span><span style="color:#E36209;">mem</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Small</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">one</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">two</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">three</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">four</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">!void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">@typeInfo</span><span style="color:#24292E;">(</span><span style="color:#E36209;">Small</span><span style="color:#24292E;">).</span><span style="color:#E36209;">Enum</span><span style="color:#24292E;">.</span><span style="color:#E36209;">tag_type</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">u2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">@typeInfo</span><span style="color:#24292E;">(</span><span style="color:#E36209;">Small</span><span style="color:#24292E;">).</span><span style="color:#E36209;">Enum</span><span style="color:#24292E;">.</span><span style="color:#E36209;">fields</span><span style="color:#24292E;">.</span><span style="color:#E36209;">len</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#E36209;">mem</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">eql</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">u8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">@typeInfo</span><span style="color:#24292E;">(</span><span style="color:#E36209;">Small</span><span style="color:#24292E;">).</span><span style="color:#E36209;">Enum</span><span style="color:#24292E;">.</span><span style="color:#E36209;">fields</span><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].</span><span style="color:#E36209;">name</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;two&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">expect</span><span style="color:#24292E;">(</span><span style="color:#E36209;">mem</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">eql</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">u8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">@tagName</span><span style="color:#24292E;">(</span><span style="color:#E36209;">Small</span><span style="color:#24292E;">.</span><span style="color:#E36209;">three</span><span style="color:#24292E;">), </span><span style="color:#032F62;">&quot;three&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="枚举推断" tabindex="-1">枚举推断 <a class="header-anchor" href="#枚举推断" aria-label="Permalink to &quot;枚举推断&quot;">​</a></h2><p>枚举也支持让 zig 编译器自动进行推断：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Color</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">auto</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">off</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">on</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">!void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">color1</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">Color</span><span style="color:#E1E4E8;"> = .</span><span style="color:#FFAB70;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;"> = </span><span style="color:#FFAB70;">color1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Color</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">auto</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">off</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">on</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">!void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">color1</span><span style="color:#24292E;">: </span><span style="color:#E36209;">Color</span><span style="color:#24292E;"> = .</span><span style="color:#E36209;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">_</span><span style="color:#24292E;"> = </span><span style="color:#E36209;">color1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="非详尽枚举" tabindex="-1">非详尽枚举 <a class="header-anchor" href="#非详尽枚举" aria-label="Permalink to &quot;非详尽枚举&quot;">​</a></h2><p>zig 允许我们不列出所有的枚举值，未列出枚举值可以使用 <code>_</code> 代替，但需明确指出枚举的序列类型并且不能已经将序列消耗干净。</p><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>关于使用<code>@enumFromInt</code> 时，需要注意不要超出范围</p></div><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Number</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">u8</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">one</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">two</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">three</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Number</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">u8</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">one</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">two</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">three</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">_</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="extern" tabindex="-1">extern <a class="header-anchor" href="#extern" aria-label="Permalink to &quot;extern&quot;">​</a></h2><p>注意哈，我们不在这里使用 <code>extern</code> 关键字，默认情况下，zig 不保证枚举和 C ABI 兼容，但是我们可以通过指定序列类型来达到这一效果：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Foo</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">c_int</span><span style="color:#E1E4E8;">) { </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;"> };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Foo</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">c_int</span><span style="color:#24292E;">) { </span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">, </span><span style="color:#E36209;">c</span><span style="color:#24292E;"> };</span></span></code></pre></div>`,27),e=[o];function c(t,E,r,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{u as __pageData,A as default};

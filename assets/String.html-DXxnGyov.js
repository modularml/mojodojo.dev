import{_ as p,r as s,o as t,c,b as a,d as n,e as o,a as r}from"./app-P3E1jSxo.js";const i={},y={href:"https://github.com/gautam-e",target:"_blank",rel:"noopener noreferrer"},d=r(`<h1 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h1><h2 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization"><span>Initialization</span></a></h2><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> String </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> String</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> s</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> String</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">abcde</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">s</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>abcde
</code></pre><h2 id="indexing" tabindex="-1"><a class="header-anchor" href="#indexing"><span>Indexing</span></a></h2><p>Loop through the string and print each item</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">for</span><span style="color:#A9B1D6;"> i </span><span style="color:#BB9AF7;">in</span><span style="color:#0DB9D7;"> range</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">len</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">s</span><span style="color:#9ABDF5;">))</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">s</span><span style="color:#9ABDF5;">[</span><span style="color:#C0CAF5;">i</span><span style="color:#9ABDF5;">])</span></span>
<span class="line"></span></code></pre></div><pre><code>a
b
c
d
e
</code></pre><p>Both slicing and indexing are on bytes, not characters, for example an emoji is 4 bytes so you need to use this slice of 4 bytes to print the character:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> utf8</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> String</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">mojo🔥</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">utf8</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">4</span><span style="color:#89DDFF;">:</span><span style="color:#FF9E64;">8</span><span style="color:#9ABDF5;">])</span></span>
<span class="line"></span></code></pre></div><pre><code>🔥
</code></pre><h2 id="slicing" tabindex="-1"><a class="header-anchor" href="#slicing"><span>Slicing</span></a></h2><p>Print part of the string sting using a slice</p><p>Slice from 2 up to 4 non-inclusive:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">s</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">2</span><span style="color:#89DDFF;">:</span><span style="color:#FF9E64;">4</span><span style="color:#9ABDF5;">])</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"></span></code></pre></div><pre><code>cd
</code></pre><p>Slice all characters starting from 1:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">s</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">1</span><span style="color:#89DDFF;">:</span><span style="color:#9ABDF5;">])</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"></span></code></pre></div><pre><code>bcde
</code></pre><p>Slice all characters up to the second last:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">s</span><span style="color:#9ABDF5;">[</span><span style="color:#89DDFF;">:-</span><span style="color:#FF9E64;">1</span><span style="color:#9ABDF5;">])</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"></span></code></pre></div><pre><code>abcd
</code></pre><p>Only get every second item after the start position:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">s</span><span style="color:#9ABDF5;">[</span><span style="color:#89DDFF;">::</span><span style="color:#FF9E64;">2</span><span style="color:#9ABDF5;">])</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"></span></code></pre></div><pre><code>ace
</code></pre><h2 id="appending" tabindex="-1"><a class="header-anchor" href="#appending"><span>Appending</span></a></h2><p>Returns a new string by copying memory</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> String</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">Left</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> y</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> String</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">Right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> c</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A9B1D6;"> y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A9B1D6;">c </span><span style="color:#89DDFF;">+=</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#9ECE6A;">🔥</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">c</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>LeftRight🔥
</code></pre><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join"><span>Join</span></a></h2><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> j</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> String</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">🔥</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><p>The <code>join</code> function has a similar syntax to Python&#39;s <code>join</code>. You can join elements using the current string as a delimiter.</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">j</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">join</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ECE6A;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#9ECE6A;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">j</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">join</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">40</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 2</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"></span></code></pre></div><pre><code>a🔥b
40🔥2
</code></pre><p>You can also use it to join elements of a StaticIntTuple.</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> Index </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> StaticIntTuple</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> sit</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> StaticIntTuple</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">3</span><span style="color:#9ABDF5;">](</span><span style="color:#FF9E64;">1</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;">2</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;">3</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">j</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">join</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">sit</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"></span></code></pre></div><pre><code>1🔥2🔥3
</code></pre><h2 id="atol" tabindex="-1"><a class="header-anchor" href="#atol"><span>atol</span></a></h2><p>The term comes from the C stdlib for <code>ASCII to long-integer</code>, it converts a string to an <code>Int</code> (currently just works with base-10 / decimal):</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> String </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> atol</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> n</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> atol</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">19</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">n</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>19
</code></pre><p>This will throw an error because there&#39;s a character that&#39;s not a digit:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> e</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> atol</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">hi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">e</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>Error: String is not convertible to integer.
</code></pre><h2 id="chr" tabindex="-1"><a class="header-anchor" href="#chr"><span>chr</span></a></h2><p>Use chr to convert an integer between 0 and 255 to a string containing the single character</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> String </span><span style="color:#7DCFFF;">import</span><span style="color:#0DB9D7;"> chr</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">chr</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">97</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"></span></code></pre></div><pre><code>a
</code></pre><h2 id="ord" tabindex="-1"><a class="header-anchor" href="#ord"><span>ord</span></a></h2><p>Stands for <code>ordinal</code> which means the position of the character in ASCII</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> String </span><span style="color:#7DCFFF;">import</span><span style="color:#0DB9D7;"> ord</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">ord</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ECE6A;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"></span></code></pre></div><pre><code>97
</code></pre><p>Only 1 byte utf8 (ASCII) characters currently work, anything outside will currently wrap:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">ord</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ECE6A;">🔥</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"></span></code></pre></div><pre><code>-16
</code></pre><h2 id="isdigit" tabindex="-1"><a class="header-anchor" href="#isdigit"><span>isdigit</span></a></h2><p>Check if the character passed in is a valid decimal between 0 and 9, which in ASCII is 48 to 57</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> String </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> isdigit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#7AA2F7;">isdigit</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">ord</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ECE6A;">8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ABDF5;">)))</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#7AA2F7;">isdigit</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">ord</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ECE6A;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ABDF5;">)))</span></span>
<span class="line"></span></code></pre></div><pre><code>True
False
</code></pre><h2 id="conversions" tabindex="-1"><a class="header-anchor" href="#conversions"><span>Conversions</span></a></h2><h3 id="to-dynamicvector-int8" tabindex="-1"><a class="header-anchor" href="#to-dynamicvector-int8"><span>To <code>DynamicVector[Int8]</code></span></a></h3><p>In Mojo a string is backed by a <code>DynamicVector[Int8]</code>, which you can access via the <code>buffer</code> member variable:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> buffer</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> String</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">mojo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">buffer</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">buffer</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">capacity</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>4
</code></pre><p>Force an error so Mojo shows us the type:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#A9B1D6;">buffer </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> &quot;&quot;</span></span>
<span class="line"></span></code></pre></div><pre><code>error: Expression [19]:25:14: cannot implicitly convert &#39;StringLiteral&#39; value to &#39;DynamicVector[SIMD[si8, 1]]&#39; in assignment
    buffer = &quot;&quot;
             ^~
</code></pre><h3 id="from-dynamicvector-int8" tabindex="-1"><a class="header-anchor" href="#from-dynamicvector-int8"><span>From <code>DynamicVector[Int8]</code></span></a></h3><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> Vector </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> DynamicVector</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> DynamicVector</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">Int8</span><span style="color:#9ABDF5;">](</span><span style="color:#FF9E64;">4</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#A9B1D6;">x</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">push_back</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">109</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#A9B1D6;">x</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">push_back</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">111</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#A9B1D6;">x</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">push_back</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">106</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#A9B1D6;">x</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">push_back</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">111</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> s</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> String</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">x</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">data</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 4</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">s</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>mojo
</code></pre>`,70);function F(D,A){const l=s("ExternalLinkIcon"),e=s("CommentService");return t(),c("div",null,[a("p",null,[n("Contributed by "),a("a",y,[n("gautam"),o(l)])]),d,o(e)])}const g=p(i,[["render",F],["__file","String.html.vue"]]),B=JSON.parse('{"path":"/guides/std/String.html","title":"String","lang":"en-US","frontmatter":{"title":"String","categories":"String","usage":"Mutable String with DynamicVector[Int8] as the underlying data type"},"headers":[{"level":2,"title":"Initialization","slug":"initialization","link":"#initialization","children":[]},{"level":2,"title":"Indexing","slug":"indexing","link":"#indexing","children":[]},{"level":2,"title":"Slicing","slug":"slicing","link":"#slicing","children":[]},{"level":2,"title":"Appending","slug":"appending","link":"#appending","children":[]},{"level":2,"title":"Join","slug":"join","link":"#join","children":[]},{"level":2,"title":"atol","slug":"atol","link":"#atol","children":[]},{"level":2,"title":"chr","slug":"chr","link":"#chr","children":[]},{"level":2,"title":"ord","slug":"ord","link":"#ord","children":[]},{"level":2,"title":"isdigit","slug":"isdigit","link":"#isdigit","children":[]},{"level":2,"title":"Conversions","slug":"conversions","link":"#conversions","children":[{"level":3,"title":"To DynamicVector[Int8]","slug":"to-dynamicvector-int8","link":"#to-dynamicvector-int8","children":[]},{"level":3,"title":"From DynamicVector[Int8]","slug":"from-dynamicvector-int8","link":"#from-dynamicvector-int8","children":[]}]}],"filePathRelative":"guides/std/String.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{g as comp,B as data};
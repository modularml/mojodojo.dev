import{_ as r,r as l,o as i,c as F,b as a,d as s,e as n,w as p,a as o}from"./app-P3E1jSxo.js";const y={},D={href:"https://github.com/gautam-e",target:"_blank",rel:"noopener noreferrer"},d=o(`<h1 id="tuple" tabindex="-1"><a class="header-anchor" href="#tuple"><span>Tuple</span></a></h1><p>Tuple literal, consists of zero or more values separated by commas.</p><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h2><p>These are the same, as <code>Tuple</code> can be elided when using <code>()</code> brackets:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> t</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (</span><span style="color:#FF9E64;">1</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 2</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> t</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> Tuple</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">1</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 2</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 3</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><p>You can also use different types inside the tuple, and can be implicit or explicit with the types:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> u</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 5.0</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> v</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Tuple</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">StringLiteral</span><span style="color:#89DDFF;">,</span><span style="color:#A9B1D6;"> FloatLiteral</span><span style="color:#89DDFF;">,</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 5.0</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="length" tabindex="-1"><a class="header-anchor" href="#length"><span>length</span></a></h2><p>Number of elements in the tuple.</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">Length of the tuple:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#0DB9D7;"> len</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">t</span><span style="color:#9ABDF5;">))</span></span>
<span class="line"></span></code></pre></div><pre><code>Length of the tuple: 3
</code></pre><h2 id="get" tabindex="-1"><a class="header-anchor" href="#get"><span>get</span></a></h2><p>Get a specific element in the tuple.</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">u</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">get</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">1</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> FloatLiteral</span><span style="color:#9ABDF5;">]())</span></span>
<span class="line"></span></code></pre></div><pre><code>5.0
</code></pre><h2 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations"><span>limitations</span></a></h2>`,16),u=o(`<div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">value</span></span>
<span class="line"><span style="color:#BB9AF7;">struct</span><span style="color:#C0CAF5;"> Coord</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (</span><span style="color:#7AA2F7;">Coord</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">5</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 10</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 5.5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> y</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> x</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">get</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A9B1D6;"> Coord</span><span style="color:#9ABDF5;">]()</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">y</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">data</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">0</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">x</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>error: Expression [2]:23:28: invalid call to &#39;get&#39;: result cannot bind generic !mlirtype to memory-only type &#39;Coord&#39;
    let y = x.get[0, Coord]()
            ~~~~~~~~~~~~~~~^~

/.modular/Kernels/mojo/Builtin/Tuple.mojo:58:5: function declared here
    fn get[i: Int, T: AnyType](self) -&gt; T:
    ^
</code></pre>`,2),A=o(`<div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">value</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">register_passable</span></span>
<span class="line"><span style="color:#BB9AF7;">struct</span><span style="color:#C0CAF5;"> Coord</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (</span><span style="color:#7AA2F7;">Coord</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">5</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 10</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 5.5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">x</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">get</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">0</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> Coord</span><span style="color:#9ABDF5;">]()</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">x</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>5
</code></pre><p>So items like a <code>String</code> won&#39;t work.</p>`,3);function h(C,g){const t=l("ExternalLinkIcon"),e=l("RouteLink"),c=l("CommentService");return i(),F("div",null,[a("p",null,[s("Contributed by "),a("a",D,[s("gautam-e"),n(t)])]),d,a("p",null,[s("You can't get items from a tuple if it's not "),n(e,{to:"/guides/decorators/register_passable.html"},{default:p(()=>[s("@register_passable")]),_:1}),s(":")]),u,a("p",null,[s("To remedy this you can mark it as "),n(e,{to:"/guides/decorators/register_passable.html"},{default:p(()=>[s("@register_passable")]),_:1}),s(", but it must contain all register passable types:")]),A,n(c)])}const B=r(y,[["render",h],["__file","Tuple.html.vue"]]),b=JSON.parse('{"path":"/guides/builtins/Tuple.html","title":"Tuple","lang":"en-US","frontmatter":{"title":"Tuple","categories":"Builtins","usage":"Tuple literal, consists of zero or more values separated by commas."},"headers":[{"level":2,"title":"init","slug":"init","link":"#init","children":[]},{"level":2,"title":"length","slug":"length","link":"#length","children":[]},{"level":2,"title":"get","slug":"get","link":"#get","children":[]},{"level":2,"title":"limitations","slug":"limitations","link":"#limitations","children":[]}],"filePathRelative":"guides/builtins/Tuple.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{B as comp,b as data};
import{_ as s,o as a,c as n,a as o}from"./app-P3E1jSxo.js";const l={},e=o(`<h1 id="definitions" tabindex="-1"><a class="header-anchor" href="#definitions"><span>Definitions</span></a></h1><h2 id="inout" tabindex="-1"><a class="header-anchor" href="#inout"><span>inout</span></a></h2><p>Any mutations <code>in</code> the function will persist <code>out</code> of the function, also known as a mutable reference</p><h2 id="argument" tabindex="-1"><a class="header-anchor" href="#argument"><span>argument</span></a></h2><p>A value that you pass to a function when calling it, or the identifier in the function definition:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> example</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">argument</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">):</span></span>
<span class="line"><span style="color:#BB9AF7;">    pass</span></span>
<span class="line"></span></code></pre></div><h2 id="parameter" tabindex="-1"><a class="header-anchor" href="#parameter"><span>parameter</span></a></h2><p>Not to be confused with <code>argument</code>, these go in the <code>[]</code> brackets in a method or function definition. Everything inside these brackets must be known at compile time:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> example</span><span style="color:#9ABDF5;">[</span><span style="color:#E0AF68;">parameter</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">](</span><span style="color:#E0AF68;">argument</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">):</span></span>
<span class="line"><span style="color:#BB9AF7;">    pass</span></span>
<span class="line"></span></code></pre></div><p>The <code>@parameter</code> decorator over an <code>if</code> statement runs during compilation:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> TargetInfo </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> os_is_linux</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">parameter</span></span>
<span class="line"><span style="color:#BB9AF7;">if</span><span style="color:#7AA2F7;"> os_is_linux</span><span style="color:#9ABDF5;">()</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">this will be included in the binary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#BB9AF7;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">this will be eliminated from compilation process</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>this will be included in the binary
</code></pre><h1 id="register-passable" tabindex="-1"><a class="header-anchor" href="#register-passable"><span>register_passable</span></a></h1><p>You can decorate a type with <code>@register_passable</code> to indicate it&#39;s not <code>memory only</code>, for example a <code>UInt3232</code> is just 32 bits for the actual value and can be directly copied into and out of registers, while a <code>String</code> contains an address that requires indirection to access the data so it&#39;s <code>memory only</code>.</p><p>Create a type with a pair of <code>UInt3232</code> and mark it register passable:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">register_passable</span></span>
<span class="line"><span style="color:#BB9AF7;">struct</span><span style="color:#C0CAF5;"> Pair</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> __copyinit__</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">self</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;"> -&gt;</span><span style="color:#A9B1D6;"> Self</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#BB9AF7;">        return</span><span style="color:#A9B1D6;"> Self</span><span style="color:#89DDFF;">{</span><span style="color:#A9B1D6;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F7768E;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A9B1D6;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#F7768E;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">b</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#0DB9D7;"> __del__</span><span style="color:#9ABDF5;">(</span><span style="color:#9D7CD8;font-style:italic;">owned</span><span style="color:#E0AF68;"> self</span><span style="color:#9ABDF5;">):</span></span>
<span class="line"><span style="color:#0DB9D7;">        print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">dropping</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><p><code>__copyinit__</code> and <code>__del__</code> aren&#39;t required, this is just to indicate that you can define how it copies if you like, and do something special when the object is dropped:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> test</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    let</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> Pair</span><span style="color:#89DDFF;">{</span><span style="color:#A9B1D6;">a</span><span style="color:#89DDFF;">:</span><span style="color:#FF9E64;"> 5</span><span style="color:#89DDFF;">,</span><span style="color:#A9B1D6;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#FF9E64;"> 10</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> y</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> x</span></span>
<span class="line"><span style="color:#A9B1D6;">    y</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">a </span><span style="color:#89DDFF;">=</span><span style="color:#FF9E64;"> 10</span></span>
<span class="line"><span style="color:#A9B1D6;">    y</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">b </span><span style="color:#89DDFF;">=</span><span style="color:#FF9E64;"> 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">x</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">a</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">b</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">y</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">a</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> y</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">b</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">test</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>dropping
5 10
dropping
10 20
</code></pre><p>Generally you just want to mark it with the <a href="/guides/decorators/value">@value</a> decorator, which will give you everything you need for <code>value-semantics</code>:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">value</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">register_passable</span></span>
<span class="line"><span style="color:#BB9AF7;">struct</span><span style="color:#C0CAF5;"> Pair</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">let</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> Pair</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">5</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 10</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">x</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">a</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> x</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">b</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>5 10
</code></pre><p>Trying to define <code>__moveinit__</code> will result in an error, the whole idea behind <code>register_passable</code> is that the type is moveable into or out of a register by copying without any indirection:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">register_passable</span></span>
<span class="line"><span style="color:#BB9AF7;">struct</span><span style="color:#C0CAF5;"> Pair</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> __moveinit__</span><span style="color:#9ABDF5;">(</span><span style="color:#9D7CD8;font-style:italic;">inout</span><span style="color:#E0AF68;"> self</span><span style="color:#89DDFF;">,</span><span style="color:#9D7CD8;font-style:italic;"> owned</span><span style="color:#E0AF68;"> exisiting</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Self</span><span style="color:#9ABDF5;">):</span></span>
<span class="line"><span style="color:#F7768E;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> exisiting</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">a</span></span>
<span class="line"><span style="color:#F7768E;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> existing</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">b</span></span>
<span class="line"></span></code></pre></div><pre><code>error: Expression [7]:10:5: &#39;__moveinit__&#39; is not supported for @register_passable types, they are always movable by copying a register
    fn __moveinit__(inout self, owned exisiting: Self):
    ^

error: Expression [7]:10:5: &#39;__moveinit__&#39; result type must be &#39;Pair&#39;
    fn __moveinit__(inout self, owned exisiting: Self):
    ^

error: Expression [7]:12:18: use of unknown declaration &#39;existing&#39;, &#39;fn&#39; declarations require explicit variable declarations
        self.b = existing.b
                 ^~~~~~~~
</code></pre><h2 id="trivial" tabindex="-1"><a class="header-anchor" href="#trivial"><span>trivial</span></a></h2><p>For a trivial type you can&#39;t define <code>__init__</code>, <code>__copyinit__</code>, <code>__moveinit__</code>, <code>__del__</code>, moving is <code>trivial</code> because it always moves by copy, there is no special logic required for indirection or anything else.</p><p>Examples of trivial types:</p><ul><li>Arithmetic types such as <code>Int</code>, <code>Bool</code>, <code>Float64</code> etc.</li><li>Pointers</li><li>Arrays of other trivial types including SIMD</li><li>Struct only trivial types decorated with <code>@register_passable(&quot;trivial&quot;)</code>:</li></ul><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#7AA2F7;">register_passable</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">trivial</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#BB9AF7;">struct</span><span style="color:#C0CAF5;"> Pair</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span></span>
<span class="line"></span></code></pre></div>`,30),p=[e];function t(c,r){return a(),n("div",null,p)}const y=s(l,[["render",t],["__file","definitions.html.vue"]]),F=JSON.parse('{"path":"/definitions.html","title":"Definitions","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"inout","slug":"inout","link":"#inout","children":[]},{"level":2,"title":"argument","slug":"argument","link":"#argument","children":[]},{"level":2,"title":"parameter","slug":"parameter","link":"#parameter","children":[]},{"level":2,"title":"trivial","slug":"trivial","link":"#trivial","children":[]}],"filePathRelative":"definitions.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{y as comp,F as data};
import{_ as n,r as a,o,c as l,e as p,a as e}from"./app-P3E1jSxo.js";const t={},c=e(`<h1 id="noncapturing" tabindex="-1"><a class="header-anchor" href="#noncapturing"><span>@noncapturing</span></a></h1><p>Marks a closure as not capturing variables from the outer scope.</p><p>Mojo considers closures capturing by default, even if it&#39;s not capturing anything, for example if you don&#39;t put the <code>capturing</code> keyword after <code>fn()</code> you&#39;ll get a compiler error:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> outer</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">f</span><span style="color:#89DDFF;">:</span><span style="color:#BB9AF7;"> fn</span><span style="color:#9ABDF5;">()</span><span style="color:#89DDFF;"> -</span><span style="color:#BB9AF7;">&gt;</span><span style="color:#FF9E64;"> None</span><span style="color:#9ABDF5;">):</span></span>
<span class="line"><span style="color:#7AA2F7;">    f</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> call_it</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> inner</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#0DB9D7;">        print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">inner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">    outer</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">inner</span><span style="color:#9ABDF5;">)</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">call_it</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>error: Expression [5]:12:10: invalid call to &#39;outer&#39;: argument #0 cannot be converted from &#39;fn() capturing -&gt; None&#39; to &#39;fn() -&gt; None&#39;
    outer(inner) 
    ~~~~~^~~~~~~

Expression [5]:5:1: function declared here
fn outer(f: fn() -&gt; None):
^

expression failed to parse (no further compiler diagnostics)
</code></pre><p>You can fix it by adding the <code>capturing</code> keyword:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> outer</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">f</span><span style="color:#89DDFF;">:</span><span style="color:#BB9AF7;"> fn</span><span style="color:#9ABDF5;">()</span><span style="color:#BB9AF7;"> capturing</span><span style="color:#89DDFF;"> -</span><span style="color:#BB9AF7;">&gt;</span><span style="color:#FF9E64;"> None</span><span style="color:#9ABDF5;">):</span></span>
<span class="line"><span style="color:#7AA2F7;">    f</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> call_it</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> inner</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#0DB9D7;">        print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">inner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">    outer</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">inner</span><span style="color:#9ABDF5;">)</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">call_it</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>inner
</code></pre><p>Alternatively, because it&#39;s not actually capturing any outer values you can annotate with <code>@noncapturing</code>:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> outer</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">f</span><span style="color:#89DDFF;">:</span><span style="color:#BB9AF7;"> fn</span><span style="color:#9ABDF5;">()</span><span style="color:#89DDFF;"> -</span><span style="color:#BB9AF7;">&gt;</span><span style="color:#FF9E64;"> None</span><span style="color:#9ABDF5;">):</span></span>
<span class="line"><span style="color:#7AA2F7;">    f</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> call_it</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#89DDFF;">    @</span><span style="color:#7AA2F7;">noncapturing</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> inner</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#0DB9D7;">        print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">inner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">    outer</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">inner</span><span style="color:#9ABDF5;">)</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">call_it</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>inner
</code></pre><p>To give you a sense of what capturing is in a closure, let&#39;s take a look:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> outer</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">f</span><span style="color:#89DDFF;">:</span><span style="color:#BB9AF7;"> fn</span><span style="color:#9ABDF5;">()</span><span style="color:#BB9AF7;"> capturing</span><span style="color:#89DDFF;"> -</span><span style="color:#BB9AF7;">&gt;</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">):</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#7AA2F7;">f</span><span style="color:#9ABDF5;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> call_it</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    let</span><span style="color:#C0CAF5;"> a</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9E64;"> 5</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> inner</span><span style="color:#9ABDF5;">()</span><span style="color:#89DDFF;"> -&gt;</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#BB9AF7;">        return</span><span style="color:#A9B1D6;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">    outer</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">inner</span><span style="color:#9ABDF5;">)</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">call_it</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>5
</code></pre><p>You can see that we captured the <code>a</code> variable in the inner closure and returned it to the outer function</p>`,15);function r(i,y){const s=a("CommentService");return o(),l("div",null,[c,p(s)])}const A=n(t,[["render",r],["__file","noncapturing.html.vue"]]),B=JSON.parse('{"path":"/guides/decorators/noncapturing.html","title":"@noncapturing","lang":"en-US","frontmatter":{"usage":"Marks a closure as not capturing variables from the outer scope"},"headers":[],"filePathRelative":"guides/decorators/noncapturing.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{A as comp,B as data};
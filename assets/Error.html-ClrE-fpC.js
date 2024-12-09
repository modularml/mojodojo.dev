import{_ as e,r as o,o as r,c as l,b as s,d as a,e as t,a as p}from"./app-P3E1jSxo.js";const c={},i={href:"https://github.com/Lorenzobattistela",target:"_blank",rel:"noopener noreferrer"},y=p(`<h1 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>Error</span></a></h1><p>The Error class is used to handle errors in Mojo.</p><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h2><p>We are able to initialize empty errors, with custom messages and even with string references.</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"><span style="color:#BB9AF7;">raise</span><span style="color:#A9B1D6;"> err</span></span>
<span class="line"></span></code></pre></div><pre><code>warning: Expression [3]:22:5: unreachable code after raise statement
    return
    ^



Error: 
</code></pre><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> custom_err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">my custom error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#BB9AF7;">raise</span><span style="color:#A9B1D6;"> custom_err</span></span>
<span class="line"></span></code></pre></div><pre><code>warning: Expression [4]:22:5: unreachable code after raise statement
    return
    ^



Error: my custom error
</code></pre><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> ref</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> StringRef </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> StringRef</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">ref</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">raise</span><span style="color:#A9B1D6;"> err</span></span>
<span class="line"></span></code></pre></div><pre><code>warning: Expression [7]:24:5: unreachable code after raise statement
    return
    ^



Error: hello
</code></pre><h2 id="fields" tabindex="-1"><a class="header-anchor" href="#fields"><span>fields</span></a></h2><ul><li><code>value</code>: The error message.</li></ul><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">something is wrong</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">err</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">value</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><pre><code>something is wrong
</code></pre><h2 id="copyinit" tabindex="-1"><a class="header-anchor" href="#copyinit"><span>copyinit</span></a></h2><p>Allows error to be copied.</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">hey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> other</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> err</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">raise</span><span style="color:#A9B1D6;"> other</span></span>
<span class="line"></span></code></pre></div><pre><code>warning: Expression [8]:25:5: unreachable code after raise statement
    return
    ^



Error: hey
</code></pre>`,18);function d(D,F){const n=o("ExternalLinkIcon");return r(),l("div",null,[s("p",null,[a("Contributed by "),s("a",i,[a("Lorenzobattistela"),t(n)])]),y])}const A=e(c,[["render",d],["__file","Error.html.vue"]]),u=JSON.parse('{"path":"/guides/builtins/Error.html","title":"Error","lang":"en-US","frontmatter":{"title":"Error","categories":"Builtins","usage":"Implements the Error class."},"headers":[{"level":2,"title":"init","slug":"init","link":"#init","children":[]},{"level":2,"title":"fields","slug":"fields","link":"#fields","children":[]},{"level":2,"title":"copyinit","slug":"copyinit","link":"#copyinit","children":[]}],"filePathRelative":"guides/builtins/Error.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{A as comp,u as data};

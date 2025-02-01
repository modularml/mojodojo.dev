import{_ as a,c as n,a as o,o as e}from"./app-CGzBYgfx.js";const l={};function r(p,s){return e(),n("div",null,s[0]||(s[0]=[o(`<p>Contributed by <a href="https://github.com/Lorenzobattistela" target="_blank" rel="noopener noreferrer">Lorenzobattistela</a></p><h1 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>Error</span></a></h1><p>The Error class is used to handle errors in Mojo.</p><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h2><p>We are able to initialize empty errors, with custom messages and even with string references.</p><div class="language-mojo" data-highlighter="prismjs" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-mojo;"><code><span class="line"><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">()</span></span></span>
<span class="line"><span class="line"><span style="color:#BB9AF7;">raise</span><span style="color:#A9B1D6;"> err</span></span></span></code></pre></div><pre><code>warning: Expression [3]:22:5: unreachable code after raise statement
    return
    ^



Error: 
</code></pre><div class="language-mojo" data-highlighter="prismjs" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-mojo;"><code><span class="line"><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> custom_err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">my custom error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#BB9AF7;">raise</span><span style="color:#A9B1D6;"> custom_err</span></span></span></code></pre></div><pre><code>warning: Expression [4]:22:5: unreachable code after raise statement
    return
    ^



Error: my custom error
</code></pre><div class="language-mojo" data-highlighter="prismjs" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-mojo;"><code><span class="line"><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> ref</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> StringRef </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> StringRef</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">ref</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#BB9AF7;">raise</span><span style="color:#A9B1D6;"> err</span></span></span></code></pre></div><pre><code>warning: Expression [7]:24:5: unreachable code after raise statement
    return
    ^



Error: hello
</code></pre><h2 id="fields" tabindex="-1"><a class="header-anchor" href="#fields"><span>fields</span></a></h2><ul><li><code>value</code>: The error message.</li></ul><div class="language-mojo" data-highlighter="prismjs" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-mojo;"><code><span class="line"><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">something is wrong</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">err</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">value</span><span style="color:#9ABDF5;">)</span></span></span></code></pre></div><pre><code>something is wrong
</code></pre><h2 id="copyinit" tabindex="-1"><a class="header-anchor" href="#copyinit"><span>copyinit</span></a></h2><p>Allows error to be copied.</p><div class="language-mojo" data-highlighter="prismjs" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-mojo;"><code><span class="line"><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> err</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> Error</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">hey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#9D7CD8;font-style:italic;">var</span><span style="color:#C0CAF5;"> other</span><span style="color:#89DDFF;"> :</span><span style="color:#A9B1D6;"> Error </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> err</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#BB9AF7;">raise</span><span style="color:#A9B1D6;"> other</span></span></span></code></pre></div><pre><code>warning: Expression [8]:25:5: unreachable code after raise statement
    return
    ^



Error: hey
</code></pre>`,19)]))}const c=a(l,[["render",r],["__file","Error.html.vue"]]),i=JSON.parse('{"path":"/guides/builtins/Error.html","title":"Error","lang":"en-US","frontmatter":{"title":"Error","categories":"Builtins","usage":"Implements the Error class."},"headers":[{"level":2,"title":"init","slug":"init","link":"#init","children":[]},{"level":2,"title":"fields","slug":"fields","link":"#fields","children":[]},{"level":2,"title":"copyinit","slug":"copyinit","link":"#copyinit","children":[]}],"git":{"contributors":[{"name":"Mojo Dojo","username":"Mojo Dojo","email":"mojodojodev@gmail.com","commits":1,"url":"https://github.com/Mojo Dojo"},{"name":"Jack Clayton","username":"Jack Clayton","email":"jackos@me.com","commits":1,"url":"https://github.com/Jack Clayton"}]},"filePathRelative":"guides/builtins/Error.md"}');export{c as comp,i as data};

import{_ as t}from"./hero-CbGtQ2Lh.js";import{_ as a,c as n,a as r,d as s,r as i,o as l}from"./app-CGzBYgfx.js";const c="/raytrace-2.png",h={};function p(d,e){const o=i("CommentService");return l(),n("div",null,[e[0]||(e[0]=r('<p><img src="'+t+`" alt="Logo"></p><h1 id="this-week-in-mojo-2023-05-26" tabindex="-1"><a class="header-anchor" href="#this-week-in-mojo-2023-05-26"><span>This Week in Mojo 2023-05-26</span></a></h1><h2 id="mojo-playground-release" tabindex="-1"><a class="header-anchor" href="#mojo-playground-release"><span>Mojo Playground Release</span></a></h2><p><a href="https://docs.modular.com/mojo/changelog.html#fixed" target="_blank" rel="noopener noreferrer">See all the bug fixes here</a></p><h3 id="⭐️-new" tabindex="-1"><a class="header-anchor" href="#⭐️-new"><span>⭐️ New</span></a></h3><p><code>finally</code> clauses are now supported on <code>try</code> statements. In addition, <code>try</code> statements no longer require <code>except</code> clauses, allowing <code>try-finally</code> blocks. <code>finally</code> clauses contain code that is always executed from control-flow leaves any of the other clauses of a <code>try</code> statement by any means.</p><h3 id="🦋-changed" tabindex="-1"><a class="header-anchor" href="#🦋-changed"><span>🦋 Changed</span></a></h3><p><code>with</code> statement emission changed to use the new <code>finally</code> logic so that</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-python;"><code><span class="line"><span class="line"><span style="color:#BB9AF7;">with</span><span style="color:#7AA2F7;"> ContextMgr</span><span style="color:#9ABDF5;">()</span><span style="color:#89DDFF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#BB9AF7;">    return</span></span></span></code></pre></div><p>Will correctly execute <code>ContextMgr.__exit__</code> before returning.</p><h2 id="community-content" tabindex="-1"><a class="header-anchor" href="#community-content"><span>Community Content</span></a></h2><ul><li><p><a href="https://gursimarsm.medium.com/" target="_blank" rel="noopener noreferrer">Gursimar Singh</a> did a <a href="https://medium.com/coinmonks/introduction-to-mojo-the-programming-language-for-ai-which-35000x-faster-than-python-4fcd3a9cecab" target="_blank" rel="noopener noreferrer">blog post</a> exploring the features of Mojo.</p></li><li><p><a href="https://github.com/Nicholaswogan" target="_blank" rel="noopener noreferrer">Nicholaswogan</a> has created a gist benchmarking <a href="https://gist.github.com/Nicholaswogan/ca156adb065cb598bd3903b3eaab2381" target="_blank" rel="noopener noreferrer">Radiative transfer with Mojo</a> against Numba</p></li><li><p>Vlad a.k.a. <a href="https://github.com/ego" target="_blank" rel="noopener noreferrer">ego</a> has created a repo named <a href="https://github.com/ego/awesome-mojo" target="_blank" rel="noopener noreferrer">awesome-mojo</a> collecting and curating various information about Mojo</p></li><li><p>New Mojo Dojo post: <a href="https://mojodojo.dev/blog.html#mojo-first-impressions-2023-05-22" target="_blank" rel="noopener noreferrer">Mojo first impressions</a></p></li><li><p><a href="https://github.com/sa-" target="_blank" rel="noopener noreferrer">sa-</a> who is active on the Discord as <code>sa-code</code> made their own <a href="https://github.com/modularml/mojo/discussions/251#discussioncomment-5998651" target="_blank" rel="noopener noreferrer">tensor struct</a> for tensors with up to 2 dimensions as well as a linear regression struct, as they experiment with creating a nice API for a full library.</p></li><li><p><a href="https://github.com/DayDun" target="_blank" rel="noopener noreferrer">DayDun</a> who has been actively raising bugs and answering questions on GitHub has been experimenting with ray tracing and attempting to improve performance via SIMD, here was the latest image and speed:</p></li></ul><p><img src="`+c+`" alt="Ray Tracing via SIMD"></p><ul><li><a href="https://gist.github.com/yt7589" target="_blank" rel="noopener noreferrer">yt7589</a> has been enthusiastically experimenting with their own <a href="https://gist.github.com/yt7589/e6f28328a0ce56f21db3861113ea5c94" target="_blank" rel="noopener noreferrer">matmul implementation</a> of up to 4 dimensions similiar to <code>numpy.matmul</code> a.k.a the <code>@</code> operator for an <code>ndarray</code></li></ul><h3 id="python-and-mojo-creator-exchange" tabindex="-1"><a class="header-anchor" href="#python-and-mojo-creator-exchange"><span>Python and Mojo creator exchange</span></a></h3><p>Python creator and <code>Benevolent Dictator For most-of-Life</code> Guido van Rossum had a small tongue-in-cheek exchange with Mojo creator and Modular CEO Chris Lattner:</p><p>Guido:</p><p>How do you pronounce the flame emoji that’s part of the language name?</p><p>Chris:</p><p>Good question, everyone I&#39;ve heard say it out loud pronounced it as 🔥</p><p>Guido:</p><p>Snark 😀 BTW we should talk some more about the evolution of Mojo&#39;s design in the context of Python.</p><p>Chris:</p><p>It is super important to me that Mojo is a good member of the wider Python community. I&#39;d love to reconnect of course!</p><h2 id="mojo-team-answers" tabindex="-1"><a class="header-anchor" href="#mojo-team-answers"><span>Mojo Team Answers</span></a></h2><h3 id="lambda-syntax" tabindex="-1"><a class="header-anchor" href="#lambda-syntax"><span><code>lambda</code> syntax</span></a></h3><p>Loosely held opinion, Mojo clearly needs to support:</p><p>Nested functions (currently wired up, but have a few issues given lifetimes are not here yet). I&#39;d like @parameter to go away on the nested functions eventually too. Existing Python lambda syntax, which is sugar, we need to support type annotations here.</p><p>Lower priority, but I think we&#39;re likely to explore:</p><p>Possibly implement more flexible/general/ergonomic light-weight closures like Scala3 =&gt; syntax</p><p>User defined statement blocks, e.g.:</p><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-python;"><code><span class="line"><span class="line"><span style="color:#7AA2F7;">parallel_loop</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">42</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#7AA2F7;">    stuff</span><span style="color:#9ABDF5;">()</span></span></span></code></pre></div><p>User defined statements are a nice way to shift more language syntax into the library, but are just syntactic sugar and will require a little more infra to get wired up. For example, I would like &quot;return&quot; in that context to return from the enclosing function (not from the lambda), and things like break to work for loop-like constructs. This is quite possible to wire up, but will require a bit of design work.</p><p>It still bugs me how &quot;return&quot; works the wrong way and break doesn&#39;t work in a &quot;closure taking control flow&quot; function in Swift. We can do better.</p><h3 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling"><span>Error Handling</span></a></h3><blockquote><p>On question about Result type like Rust</p></blockquote><p>It will be one of the things added when Abstract Data Types (ADT) and traits are in place</p><h3 id="curly-brackets" tabindex="-1"><a class="header-anchor" href="#curly-brackets"><span>Curly Brackets</span></a></h3><p>There are practical reasons why brackets will not work and why significant whitespace is crucial to the parser: lazy body parsing. Mojo&#39;s parser can trivially skip over the body of structs, functions, etc. because it can use the expected indentation to find the end of the indentation block.</p><blockquote><p>Answer from Chris after more discussion</p></blockquote><p>This suggestion cuts directly against or goals for Mojo, which is to be a member of the Python family. Thank you for your suggestions, but our goal isn&#39;t to design a new language from first principles (been there done that 😄), it is to lift an existing ecosystem. We are also not adding general syntactic sugar, we are focused on core systems programming features that Python lacks.</p><h3 id="type-builtin" tabindex="-1"><a class="header-anchor" href="#type-builtin"><span><code>type</code> builtin</span></a></h3><p>The issue with adding the type bultin to Mojo is that we don&#39;t have a runtime type representation yet. I.e. in Python, type returns a type instance that can be used like a class.</p><h3 id="infinite-recursion-error" tabindex="-1"><a class="header-anchor" href="#infinite-recursion-error"><span>Infinite Recursion Error</span></a></h3><p>We want the compiler to generate diagnostics on obvious bugs to help the programmer. If someone accidentally typos something or (like your initial example) does something that is obviously recursive, we should help the programmer out.</p><p>I don&#39;t think there is a good reason for people to want to exhaust the stack; generating an error seems fine, and if there is some important use case we can figure out if there are different ways to address the need.</p><p>I agree we should generate a good error rather than just crashing when an undetected-infinite recursion (or just DEEP recursion) happens, this isn&#39;t going to get fixed in the immediate future due to prioritization, but I agree we should do it at some point.</p><p>Watch out for LLVM which has tail call and other optimizations, which can turn things into closed form loops in some cases 😀</p>`,48)),s(o)])}const g=a(h,[["render",p],["__file","2023-05-26.html.vue"]]),y=JSON.parse('{"path":"/this-week-in-mojo/2023-05-26.html","title":"This Week in Mojo 2023-05-26","lang":"en-US","frontmatter":{"title":"This Week in Mojo 2023-05-26","date":"2023-05-26T00:00:00.000Z","author":"Mojo Dojo","author_site":"https://mojodojo.dev","author_image":"https://mojodojo.dev/hero.png","feed":true},"headers":[{"level":2,"title":"Mojo Playground Release","slug":"mojo-playground-release","link":"#mojo-playground-release","children":[{"level":3,"title":"⭐️ New","slug":"⭐️-new","link":"#⭐️-new","children":[]},{"level":3,"title":"🦋 Changed","slug":"🦋-changed","link":"#🦋-changed","children":[]}]},{"level":2,"title":"Community Content","slug":"community-content","link":"#community-content","children":[{"level":3,"title":"Python and Mojo creator exchange","slug":"python-and-mojo-creator-exchange","link":"#python-and-mojo-creator-exchange","children":[]}]},{"level":2,"title":"Mojo Team Answers","slug":"mojo-team-answers","link":"#mojo-team-answers","children":[{"level":3,"title":"lambda syntax","slug":"lambda-syntax","link":"#lambda-syntax","children":[]},{"level":3,"title":"Error Handling","slug":"error-handling","link":"#error-handling","children":[]},{"level":3,"title":"Curly Brackets","slug":"curly-brackets","link":"#curly-brackets","children":[]},{"level":3,"title":"type builtin","slug":"type-builtin","link":"#type-builtin","children":[]},{"level":3,"title":"Infinite Recursion Error","slug":"infinite-recursion-error","link":"#infinite-recursion-error","children":[]}]}],"git":{"contributors":[{"name":"Mojo Dojo","username":"Mojo Dojo","email":"mojodojodev@gmail.com","commits":1,"url":"https://github.com/Mojo Dojo"},{"name":"Jack Clayton","username":"Jack Clayton","email":"jackos@me.com","commits":1,"url":"https://github.com/Jack Clayton"}]},"filePathRelative":"this-week-in-mojo/2023-05-26.md"}');export{g as comp,y as data};

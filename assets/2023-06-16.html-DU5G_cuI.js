import{_ as o}from"./hero-CbGtQ2Lh.js";import{_ as a,c as r,a as n,d as i,r as s,o as l}from"./app-CGzBYgfx.js";const h={};function d(c,e){const t=s("CommentService");return l(),r("div",null,[e[0]||(e[0]=n('<p><img src="'+o+`" alt="Logo"></p><h1 id="this-week-in-mojo-2023-06-16" tabindex="-1"><a class="header-anchor" href="#this-week-in-mojo-2023-06-16"><span>This Week in Mojo 2023-06-16</span></a></h1><h2 id="mojo-playground-update" tabindex="-1"><a class="header-anchor" href="#mojo-playground-update"><span>Mojo Playground Update</span></a></h2><p><a href="https://docs.modular.com/mojo/changelog.html#june-2023" target="_blank" rel="noopener noreferrer">Release Notes here</a></p><h3 id="⭐️-new" tabindex="-1"><a class="header-anchor" href="#⭐️-new"><span>⭐️ New</span></a></h3><p>Tuple type syntax is now supported, for example the following works:</p><div class="language-mojo" data-highlighter="prismjs" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-mojo;"><code><span class="line"><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> return_tuple</span><span style="color:#9ABDF5;">()</span><span style="color:#89DDFF;"> -&gt;</span><span style="color:#89DDFF;"> (</span><span style="color:#A9B1D6;">Int</span><span style="color:#89DDFF;">,</span><span style="color:#A9B1D6;"> Int</span><span style="color:#89DDFF;">)</span><span style="color:#9ABDF5;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#BB9AF7;">   return</span><span style="color:#89DDFF;"> (</span><span style="color:#FF9E64;">1</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 2</span><span style="color:#89DDFF;">)</span></span></span></code></pre></div><h3 id="🦋-changed" tabindex="-1"><a class="header-anchor" href="#🦋-changed"><span>🦋 Changed</span></a></h3><p>The <code>TupleLiteral</code> type was renamed to just Tuple, e.g. <code>Tuple[Int, Float]</code></p><h3 id="🛠️-fixed" tabindex="-1"><a class="header-anchor" href="#🛠️-fixed"><span>🛠️ Fixed</span></a></h3><ul><li><a href="https://github.com/modularml/mojo/issues/354" target="_blank" rel="noopener noreferrer">Issue #354</a> - Returning a tuple doesn’t work even with parens.</li><li><a href="https://github.com/modularml/mojo/issues/365" target="_blank" rel="noopener noreferrer">Issue #365</a> - Copy-paste error in FloatLiteral docs.</li><li><a href="https://github.com/modularml/mojo/issues/357" target="_blank" rel="noopener noreferrer">Issue #357</a> - Crash when missing input parameter to variadic parameter struct member function.</li></ul><h2 id="community-content" tabindex="-1"><a class="header-anchor" href="#community-content"><span>Community Content</span></a></h2><ul><li>The team at <a href="https://kapa.ai" target="_blank" rel="noopener noreferrer">kapa.ai</a> created a <a href="https://demo.kapa.ai/widget/modular" target="_blank" rel="noopener noreferrer">GPT-4 powered chatbot for Mojo docs</a> which you can now prompt from the <a href="https://discord.com/channels/1087530497313357884/1119100298456215572" target="_blank" rel="noopener noreferrer">#mojo-bot-help</a> channel</li><li>Put up a initial draft for the first chapter of a tutorial series <a href="https://mojodojo.dev/guides/intro_to_mojo/2-basic-types.html" target="_blank" rel="noopener noreferrer">Intro to Mojo: Basic Types</a>. Feedback very welcome on <a href="https://github.com/mojodojodev/mojodojo.dev/issues" target="_blank" rel="noopener noreferrer">GitHub issues</a>.</li><li><a href="https://github.com/crisadamo" target="_blank" rel="noopener noreferrer">Cristian Adamo</a> is working on a <a href="https://github.com/crisadamo/mojo-libc/blob/main/Libc.mojo" target="_blank" rel="noopener noreferrer">libc implementation</a> in Mojo!</li><li><a href="https://github.com/yakupc55" target="_blank" rel="noopener noreferrer">yakupc55</a> has been <a href="https://github.com/yakupc55/mojo-example/blob/main/harezmi/harezmi_nn_01.md" target="_blank" rel="noopener noreferrer">experimenting with neural networks</a></li><li><a href="https://alexforgerr.medium.com/" target="_blank" rel="noopener noreferrer">Alex1957</a> did a blog post on <a href="https://alexforgerr.medium.com/exploring-vectors-in-mojo-71451165bb84" target="_blank" rel="noopener noreferrer">exploring vectors in Mojo</a></li></ul><h2 id="mojo-team-answers" tabindex="-1"><a class="header-anchor" href="#mojo-team-answers"><span>Mojo Team Answers</span></a></h2><h3 id="custom-allocators" tabindex="-1"><a class="header-anchor" href="#custom-allocators"><span>Custom Allocators</span></a></h3><p>We don&#39;t have an established policy here and this is a really complicated topic, I&#39;m not keen on making everyone <em>always</em> think about allocators like Zig does, I don&#39;t think that is practical in a language that cares about usability and ergonomics, but it is clearly good to <em>allow</em> folks to care.</p><p>In my personal opinion, there is a big difference practically between <code>node</code> allocation and <code>array</code> allocation. Error handling for small objects will kill us, and we don&#39;t want to make allocation of any class instance be failable. That said, allocating an array that could be 16GB definitely can fail. On the third hand, core data structures like Array probably don&#39;t want to expose memory allocation failability to the client by default for usability reasons.</p><p>It would be interesting to explore making these different APIs, possibly overloaded with a keyword argument or something. As one idea, we could make <code>UnsafePointer[T].allocate()</code> non-failable, but make <code>UnsafePointer[T].allocate(Int)</code> failable. We&#39;d still have to decide what to do with that at the Array api level, but it too could have overloads for <code>arr.resize(n)</code> vs <code>arr.resize(checked = n)</code> or something like that.</p><p><a href="https://github.com/modularml/mojo/discussions/377#discussioncomment-6188353" target="_blank" rel="noopener noreferrer">2023-06-16 Github Chris Lattner</a></p><h3 id="first-class-lifetimes" tabindex="-1"><a class="header-anchor" href="#first-class-lifetimes"><span>First Class Lifetimes</span></a></h3><p>I&#39;m optimistic the Mojo lifetime solution will be a nice step forward in both usability and expressivity vs rust, and first class lifetimes are very nice for inner pointers etc.</p><p>Mojo references are currently second class exactly as <a href="https://graydon2.dreamwidth.org/307291.html" target="_blank" rel="noopener noreferrer">Graydon advocates</a>. We&#39;re experimenting with lifetimes, but if they spiral in complexity we can always eliminate them as a concept and stay with the current design.</p><ul><li><a href="https://discord.com/channels/1087530497313357884/1098713601386233997/1118249300405780541" target="_blank" rel="noopener noreferrer">2023-06-14 Discord Chris Lattner</a></li></ul><h3 id="untyped-mojo-improvements-over-python" tabindex="-1"><a class="header-anchor" href="#untyped-mojo-improvements-over-python"><span>Untyped Mojo Improvements over Python</span></a></h3><p>The easy answers are that the compiler eliminates a ton of overhead compared to the interpreter even if the individual operations are the same, and our dynamic object representation is a variant on the stack for simple things like numbers instead of a heap box, which is a huge win. We aren&#39;t doing any interesting static or dynamic analysis like V8 or PyPy etc yet, but we can obviously layer those things into the system as it matures.</p><ul><li><a href="https://discord.com/channels/1087530497313357884/1098713601386233997/1118249387915751538" target="_blank" rel="noopener noreferrer">2023-06-14 Discord Chris Lattner</a></li></ul><h3 id="self-hosting" tabindex="-1"><a class="header-anchor" href="#self-hosting"><span>Self Hosting</span></a></h3><p>It will take us quite some time to get there, but yes I would like the Mojo parser to some day be written in Mojo. I would also like to see the CPython interpreter rewritten in Mojo, but have no plans to do so. One can dream 😉</p><ul><li><a href="https://discord.com/channels/1087530497313357884/1103006101261267004/1118233873738903704" target="_blank" rel="noopener noreferrer">2023-06-14 Discord Chris Lattner</a></li></ul><h3 id="receiver-free-floating-functions" tabindex="-1"><a class="header-anchor" href="#receiver-free-floating-functions"><span>Receiver / Free Floating Functions</span></a></h3><p>There are alternative ways to address the same thing, e.g. check out how extensions work in Swift. We&#39;ll need to look at this whole area as traits come in. We don&#39;t have a goal of providing the Julia multimethod dispatch thing. There isn&#39;t an efficient way to implement that other than full monomorphization, it is better to express the same thing with generics, which we haven&#39;t designed yet. Let&#39;s build out the traits system and see what the limitations are.</p><ul><li><a href="https://github.com/modularml/mojo/discussions/366#discussioncomment-6155792" target="_blank" rel="noopener noreferrer">2023-06-13 Github Chris Lattner</a></li></ul><h3 id="side-effect-propagation" tabindex="-1"><a class="header-anchor" href="#side-effect-propagation"><span>Side Effect Propagation</span></a></h3><p>Unfortunately, it is pretty impractical to define what <code>side effect free</code> means in a general purpose language; particularly one that wants you to be able to call existing python code.</p><p>In practice side effects would be so common that the model would have to be &quot;add a keyword to opt-in/indicate/require that a function is side effect free&quot;, not &quot;add a keyword saying it has side effects&quot;.</p><p>Given that, very few people would use it, and it would interfere with printf debugging and a lot of other things.</p><p>It&#39;s possible that there is a model here that will work and would be usable, but I&#39;m not sure how much value it would provide.</p><ul><li><a href="https://discord.com/channels/1087530497313357884/1117003204400513054/1117495786507354233" target="_blank" rel="noopener noreferrer">2023-06-12 Discord Chris Lattner</a></li></ul><h3 id="sorting-algorithm-discovered-by-alphadev" tabindex="-1"><a class="header-anchor" href="#sorting-algorithm-discovered-by-alphadev"><span>Sorting Algorithm discovered by AlphaDev</span></a></h3><p>Sure, that algorithm could definitely be used inside the Mojo sort algorithm. What they found is something you&#39;d put into a standard library, e.g. they put it into the libc++ c++ standard library, eventually it could go into the Mojo stdlib.</p><ul><li><a href="https://discord.com/channels/1087530497313357884/1103420074372644916/1117497920678285332" target="_blank" rel="noopener noreferrer">2023-06-12 Discord Chris Lattner</a></li></ul><h3 id="stringref-from-llvm" tabindex="-1"><a class="header-anchor" href="#stringref-from-llvm"><span>StringRef from LLVM</span></a></h3><p>Yep that&#39;s where it came from. It is directly related to string_view in C++, the LLVM data structures predate the C++ STL growing all these things. The idea of a <code>pointer + extend without ownership</code> is more general than a <code>reference to a specific owning data structure</code> because it type erases the concrete storage type. For example, an LLVM StringRef can point into C array, an std::vector, or one of the zoo of other specialized storage types llvm has - it can even point to a scalar on the stack.</p><p>Per the comments above, I think actually calling this sort of type <code>ArrayRef</code> and <code>StringRef</code> in mojo would be super confusing if we have <code>ref</code> as a different concept. Python generally uses the word &quot;Slice&quot; for these things, and I think that would be great to use for these.</p><ul><li><a href="https://github.com/modularml/mojo/discussions/338#discussioncomment-6145782" target="_blank" rel="noopener noreferrer">2023-06-12 GitHub Chris Lattner</a></li></ul><h3 id="borrowed-keyword" tabindex="-1"><a class="header-anchor" href="#borrowed-keyword"><span><code>borrowed</code> keyword</span></a></h3><p>I don&#39;t have strong opinions, but I have some concern about general programmers (i.e., those without Rust experience) and the word &quot;borrow&quot;. It is a word that can be explained and has good meaning in the rust lexicon, but doesn&#39;t connote referencing something, and doesn&#39;t even appear in the rust language (they use the &amp; sigil instead). This isn&#39;t to say that &quot;borrow&quot; or &quot;borrowed&quot; is bad, but it does have some challenges.</p><ul><li><a href="https://github.com/modularml/mojo/discussions/338#discussioncomment-6145791" target="_blank" rel="noopener noreferrer">2023-06-12 GitHub Chris Lattner</a></li></ul>`,48)),i(t)])}const u=a(h,[["render",d],["__file","2023-06-16.html.vue"]]),f=JSON.parse('{"path":"/this-week-in-mojo/2023-06-16.html","title":"This Week in Mojo 2023-06-16","lang":"en-US","frontmatter":{"title":"This Week in Mojo 2023-06-16","date":"2023-06-16T00:00:00.000Z","author":"Mojo Dojo","author_site":"https://mojodojo.dev","author_image":"https://mojodojo.dev/hero.png","feed":true,"head":[["meta",{"name":"twitter:card","content":"summary"}],["meta",{"name":"twitter:site","content":"@mojodojodev"}],["meta",{"name":"twitter:title","content":"This Week in Mojo"}],["meta",{"name":"twitter:description","content":"This week in Mojo with language updates, community content, and everything else related to Mojo"}],["meta",{"name":"twitter:image","content":"https://mojodojo.dev/hero.png"}]]},"headers":[{"level":2,"title":"Mojo Playground Update","slug":"mojo-playground-update","link":"#mojo-playground-update","children":[{"level":3,"title":"⭐️ New","slug":"⭐️-new","link":"#⭐️-new","children":[]},{"level":3,"title":"🦋 Changed","slug":"🦋-changed","link":"#🦋-changed","children":[]},{"level":3,"title":"🛠️ Fixed","slug":"🛠️-fixed","link":"#🛠️-fixed","children":[]}]},{"level":2,"title":"Community Content","slug":"community-content","link":"#community-content","children":[]},{"level":2,"title":"Mojo Team Answers","slug":"mojo-team-answers","link":"#mojo-team-answers","children":[{"level":3,"title":"Custom Allocators","slug":"custom-allocators","link":"#custom-allocators","children":[]},{"level":3,"title":"First Class Lifetimes","slug":"first-class-lifetimes","link":"#first-class-lifetimes","children":[]},{"level":3,"title":"Untyped Mojo Improvements over Python","slug":"untyped-mojo-improvements-over-python","link":"#untyped-mojo-improvements-over-python","children":[]},{"level":3,"title":"Self Hosting","slug":"self-hosting","link":"#self-hosting","children":[]},{"level":3,"title":"Receiver / Free Floating Functions","slug":"receiver-free-floating-functions","link":"#receiver-free-floating-functions","children":[]},{"level":3,"title":"Side Effect Propagation","slug":"side-effect-propagation","link":"#side-effect-propagation","children":[]},{"level":3,"title":"Sorting Algorithm discovered by AlphaDev","slug":"sorting-algorithm-discovered-by-alphadev","link":"#sorting-algorithm-discovered-by-alphadev","children":[]},{"level":3,"title":"StringRef from LLVM","slug":"stringref-from-llvm","link":"#stringref-from-llvm","children":[]},{"level":3,"title":"borrowed keyword","slug":"borrowed-keyword","link":"#borrowed-keyword","children":[]}]}],"git":{"contributors":[{"name":"Mojo Dojo","username":"Mojo Dojo","email":"mojodojodev@gmail.com","commits":1,"url":"https://github.com/Mojo Dojo"},{"name":"Jack Clayton","username":"Jack Clayton","email":"jackos@me.com","commits":1,"url":"https://github.com/Jack Clayton"}]},"filePathRelative":"this-week-in-mojo/2023-06-16.md"}');export{u as comp,f as data};

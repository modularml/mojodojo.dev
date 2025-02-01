import{_ as n,c as a,a as l,o as p}from"./app-CGzBYgfx.js";const o={};function e(t,s){return p(),a("div",null,s[0]||(s[0]=[l(`<div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-python;"><code><span class="line"><span class="line"><span style="color:#89DDFF;">%%</span><span style="color:#A9B1D6;">python</span></span></span>
<span class="line"><span class="line"><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> cv2 </span><span style="color:#7DCFFF;">as</span><span style="color:#A9B1D6;"> cv</span></span></span>
<span class="line"><span class="line"><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> numpy </span><span style="color:#7DCFFF;">as</span><span style="color:#A9B1D6;"> np</span></span></span>
<span class="line"><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> matplotlib </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> colors</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">image </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> cv</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">imread</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ECE6A;">/home/jovyan/fire.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">hex_values </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> [</span></span></span>
<span class="line"><span class="line"><span style="color:#89DDFF;">    &#39;</span><span style="color:#9ECE6A;">#998AD3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#89DDFF;">    &#39;</span><span style="color:#9ECE6A;">#E494D3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#89DDFF;">    &#39;</span><span style="color:#9ECE6A;">#CDF1AF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#89DDFF;">    &#39;</span><span style="color:#9ECE6A;">#87DCC0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#89DDFF;">    &#39;</span><span style="color:#9ECE6A;">#88BBE4</span><span style="color:#89DDFF;">&#39;</span></span></span>
<span class="line"><span class="line"><span style="color:#89DDFF;">]</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">colours </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;"> []</span></span></span>
<span class="line"><span class="line"><span style="color:#BB9AF7;">for</span><span style="color:#A9B1D6;"> hex_value </span><span style="color:#BB9AF7;">in</span><span style="color:#A9B1D6;"> hex_values</span><span style="color:#89DDFF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">    rgb_tuple </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> colors</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">hex2color</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">hex_value</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">    rgb </span><span style="color:#89DDFF;">=</span><span style="color:#0DB9D7;"> tuple</span><span style="color:#9ABDF5;">(</span><span style="color:#0DB9D7;">int</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">val </span><span style="color:#89DDFF;">*</span><span style="color:#FF9E64;"> 255</span><span style="color:#9ABDF5;">)</span><span style="color:#BB9AF7;"> for</span><span style="color:#C0CAF5;"> val </span><span style="color:#BB9AF7;">in</span><span style="color:#C0CAF5;"> rgb_tuple</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">    colours</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">append</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">rgb</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">output_image </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> np</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">zeros_like</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">image</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#BB9AF7;">for</span><span style="color:#A9B1D6;"> i </span><span style="color:#BB9AF7;">in</span><span style="color:#0DB9D7;"> range</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">image</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">shape</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">0</span><span style="color:#9ABDF5;">])</span><span style="color:#89DDFF;">:</span></span></span>
<span class="line"><span class="line"><span style="color:#BB9AF7;">    for</span><span style="color:#A9B1D6;"> j </span><span style="color:#BB9AF7;">in</span><span style="color:#0DB9D7;"> range</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">image</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">shape</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">1</span><span style="color:#9ABDF5;">])</span><span style="color:#89DDFF;">:</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">        closest_colour </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> colours</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">np</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">argmin</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">np</span><span style="color:#89DDFF;">.</span><span style="color:#C0CAF5;">linalg</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">norm</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">colours </span><span style="color:#89DDFF;">-</span><span style="color:#C0CAF5;"> image</span><span style="color:#9ABDF5;">[</span><span style="color:#C0CAF5;">i</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> j</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;">,</span><span style="color:#E0AF68;"> axis</span><span style="color:#89DDFF;">=</span><span style="color:#FF9E64;">1</span><span style="color:#9ABDF5;">))]</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">        output_image</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A9B1D6;"> j</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> closest_colour</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">cv</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">imwrite</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">output.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> output_image</span><span style="color:#9ABDF5;">)</span></span></span></code></pre></div><div class="language-python" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="shiki tokyo-night vp-code" style="background-color:#1a1b26;color:#a9b1d6 language-python;"><code><span class="line"><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> Buffer </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> Buffer</span><span style="color:#89DDFF;">,</span><span style="color:#A9B1D6;"> NDBuffer</span></span></span>
<span class="line"><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> DType </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> DType</span></span></span>
<span class="line"><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> Index </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> StaticIntTuple</span></span></span>
<span class="line"><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> TargetInfo </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> dtype_simd_width</span></span></span>
<span class="line"><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> List </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> DimList</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">let cv </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> Python</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">import_module</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">cv2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">let np </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> Python</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">import_module</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">numpy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">let py </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> Python</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">import_module</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">builtins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">var img </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> cv</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">imread</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">/home/jovyan/fire.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">py</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">img</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># alias hex_values = [</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;">#     &#39;#998AD3&#39;,</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;">#     &#39;#E494D3&#39;,</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;">#     &#39;#CDF1AF&#39;,</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;">#     &#39;#87DCC0&#39;,</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;">#     &#39;#88BBE4&#39;</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># ]</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">let h </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">shape</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">0</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">to_index</span><span style="color:#9ABDF5;">()</span></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">let w </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">shape</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">1</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">to_index</span><span style="color:#9ABDF5;">()</span></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">let c </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">shape</span><span style="color:#9ABDF5;">[</span><span style="color:#FF9E64;">2</span><span style="color:#9ABDF5;">]</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">to_index</span><span style="color:#9ABDF5;">()</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#0DB9D7;">print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">image is</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> h</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;">w</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;">c</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># Create a buffer over the Numpy array</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># var buf = NDBuffer[3, DimList(256, 256, 3), DType.int8](img.pyObject.value, StaticIntTuple[3](h, w, c), DType.int8)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># Calcuate how many elements can fit into our SIMD register</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># alias nelts = dtype_simd_width[DType.int8]()</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># let size = img.size</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># let iterations = size // nelts</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># let leftovers = size % nelts</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># print(&quot;nelts:&quot;, nelts)</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># print(&quot;size:&quot;, size)</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># print(&quot;iterations:&quot;, iterations)</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># print(&quot;leftovers:&quot;, leftovers)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># # let vals = buf.simd_load[nelts](0) / 10</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;"># for i in range(1, 10):</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;">#     let i_shape = buf.get_nd_index(i)</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;">#     print(buf[i_shape])</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;">#     let i_shape = buf.get_nd_index(i * nelts)</span></span></span>
<span class="line"><span class="line"><span style="color:#51597D;font-style:italic;">#     buf.simd_store[nelts](i_shape, 10)</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">cv</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">resize</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">img</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> (</span><span style="color:#FF9E64;">64</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 64</span><span style="color:#89DDFF;">),</span><span style="color:#E0AF68;"> inerpolation</span><span style="color:#89DDFF;"> =</span><span style="color:#C0CAF5;"> cv</span><span style="color:#89DDFF;">.</span><span style="color:#FF9E64;">INTER_LINEAR</span><span style="color:#9ABDF5;">)</span></span></span>
<span class="line"><span class="line"><span style="color:#A9B1D6;">cv</span><span style="color:#89DDFF;">.</span><span style="color:#7AA2F7;">imwrite</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">little_fire.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> img</span><span style="color:#9ABDF5;">)</span></span></span></code></pre></div><pre><code>[[[255 255 255]
  [255 255 255]
  [255 255 255]
  ...
  [255 255 255]
  [255 255 255]
  [255 255 255]]

 [[255 255 255]
  [255 255 255]
  [255 255 255]
  ...
  [255 255 255]
  [255 255 255]
  [255 255 255]]

 [[255 255 255]
  [255 255 255]
  [255 255 255]
  ...
  [255 255 255]
  [255 255 255]
  [255 255 255]]

 ...

 [[255 255 255]
  [255 255 255]
  [255 255 255]
  ...
  [255 255 255]
  [255 255 255]
  [255 255 255]]

 [[255 255 255]
  [255 255 255]
  [255 255 255]
  ...
  [255 255 255]
  [255 255 255]
  [255 255 255]]

 [[255 255 255]
  [255 255 255]
  [255 255 255]
  ...
  [255 255 255]
  [255 255 255]
  [255 255 255]]]
image is 256 x 256 x 3
</code></pre>`,3)]))}const r=n(o,[["render",e],["__file","opencv.html.vue"]]),y=JSON.parse('{"path":"/guides/examples/opencv.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"contributors":[{"name":"Mojo Dojo","username":"Mojo Dojo","email":"mojodojodev@gmail.com","commits":1,"url":"https://github.com/Mojo Dojo"},{"name":"Jack Clayton","username":"Jack Clayton","email":"jackos@me.com","commits":1,"url":"https://github.com/Jack Clayton"}]},"filePathRelative":"guides/examples/opencv.md"}');export{r as comp,y as data};

import{_ as t,r as a,o as c,c as r,b as n,d as s,e as l,a as o}from"./app-P3E1jSxo.js";const i={},y=o(`<h1 id="benchmark" tabindex="-1"><a class="header-anchor" href="#benchmark"><span>Benchmark</span></a></h1><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import"><span>Import</span></a></h2><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> Benchmark </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> Benchmark</span></span>
<span class="line"></span></code></pre></div><h2 id="general-usage" tabindex="-1"><a class="header-anchor" href="#general-usage"><span>General Usage</span></a></h2><p>Loop through each number up to <code>n</code> and calculate the total in the fibonacci sequence:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#9D7CD8;font-style:italic;">alias</span><span style="color:#C0CAF5;"> n</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9E64;"> 35</span><span style="color:#A9B1D6;"> </span></span>
<span class="line"></span></code></pre></div><p>Define the recursive version first:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> fib</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;"> -&gt;</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#BB9AF7;">    if</span><span style="color:#A9B1D6;"> n </span><span style="color:#BB9AF7;">&lt;=</span><span style="color:#FF9E64;"> 1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BB9AF7;">       return</span><span style="color:#A9B1D6;"> n </span></span>
<span class="line"><span style="color:#BB9AF7;">    else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BB9AF7;">       return</span><span style="color:#7AA2F7;"> fib</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">n</span><span style="color:#89DDFF;">-</span><span style="color:#FF9E64;">1</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;"> +</span><span style="color:#7AA2F7;"> fib</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">n</span><span style="color:#89DDFF;">-</span><span style="color:#FF9E64;">2</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span></code></pre></div><p>To benchmark it, create a nested <code>fn</code> that takes no arguments and doesn&#39;t return anything, then pass it in as a parameter:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> bench</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> closure</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">        for</span><span style="color:#A9B1D6;"> i </span><span style="color:#BB9AF7;">in</span><span style="color:#0DB9D7;"> range</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">n</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A9B1D6;">            _ </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> fib</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">i</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    let</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> Benchmark</span><span style="color:#9ABDF5;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">run</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">closure</span><span style="color:#9ABDF5;">]()</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">Nanoseconds:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">Seconds:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#7AA2F7;"> Float64</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">nanoseconds</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;"> /</span><span style="color:#FF9E64;"> 1e9</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">bench</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>Nanoseconds: 50322420
Seconds: 0.05032242
</code></pre><p>Define iterative version for comparison:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> fib_iterative</span><span style="color:#9ABDF5;">(</span><span style="color:#E0AF68;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;"> -&gt;</span><span style="color:#A9B1D6;"> Int</span><span style="color:#9ABDF5;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> count</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9E64;"> 0</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> n1</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9E64;"> 0</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    var</span><span style="color:#C0CAF5;"> n2</span><span style="color:#89DDFF;"> =</span><span style="color:#FF9E64;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">    while</span><span style="color:#A9B1D6;"> count </span><span style="color:#BB9AF7;">&lt;</span><span style="color:#A9B1D6;"> n</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">       let</span><span style="color:#C0CAF5;"> nth</span><span style="color:#89DDFF;"> =</span><span style="color:#A9B1D6;"> n1 </span><span style="color:#89DDFF;">+</span><span style="color:#A9B1D6;"> n2</span></span>
<span class="line"><span style="color:#A9B1D6;">       n1 </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> n2</span></span>
<span class="line"><span style="color:#A9B1D6;">       n2 </span><span style="color:#89DDFF;">=</span><span style="color:#A9B1D6;"> nth</span></span>
<span class="line"><span style="color:#A9B1D6;">       count </span><span style="color:#89DDFF;">+=</span><span style="color:#FF9E64;"> 1</span></span>
<span class="line"><span style="color:#BB9AF7;">    return</span><span style="color:#A9B1D6;"> n1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> bench_iterative</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> iterative_closure</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">        for</span><span style="color:#A9B1D6;"> i </span><span style="color:#BB9AF7;">in</span><span style="color:#0DB9D7;"> range</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">n</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A9B1D6;">            _ </span><span style="color:#89DDFF;">=</span><span style="color:#7AA2F7;"> fib_iterative</span><span style="color:#9ABDF5;">(</span><span style="color:#C0CAF5;">i</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    let</span><span style="color:#C0CAF5;"> iterative</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> Benchmark</span><span style="color:#9ABDF5;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">run</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">iterative_closure</span><span style="color:#9ABDF5;">]()</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">Nanoseconds iterative:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> iterative</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">bench_iterative</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>Nanoseconds iterative: 0
</code></pre><p>Notice that the compiler has optimized away everything, LLVM can change an iterative loop to a constant value if all the inputs are known at compile time through <code>constant folding</code>, or if the value isn&#39;t actually used for anything with <code>Dead Code Elimination</code> both of which could be occurring here.</p>`,15),F=n("em",null,"think",-1),D={href:"https://vimeo.com/649009599",target:"_blank",rel:"noopener noreferrer"},A=o(`<h2 id="max-iters" tabindex="-1"><a class="header-anchor" href="#max-iters"><span>Max iters</span></a></h2><p>Set max iterations and a 1s max total duration</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#7DCFFF;">from</span><span style="color:#A9B1D6;"> Time </span><span style="color:#7DCFFF;">import</span><span style="color:#A9B1D6;"> sleep</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> bench_args</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> sleeper</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#0DB9D7;">        print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">sleeping 300,000ns</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#7AA2F7;">        sleep</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">3e-4</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#A9B1D6;">    </span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">0 warmup iters, 4 max iters, 0ns min time, 1_000_000_000ns max time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    let</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> Benchmark</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">0</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 5</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 1_000_000_000</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">run</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">sleeper</span><span style="color:#9ABDF5;">]()</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">average time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">bench_args</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>0 warmup iters, 4 max iters, 0ns min time, 1_000_000_000ns max time
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
average time 363769
</code></pre><p>Note there is some extra logic inside <code>Benchmark</code> to help improve accuracy, so here it actually runs 6 iterations</p><h2 id="max-duration" tabindex="-1"><a class="header-anchor" href="#max-duration"><span>Max Duration</span></a></h2><p>Limit the max running time, so it will never run over 0.001 seconds and will not hit the max iters of 5:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> bench_args_2</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> sleeper</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#0DB9D7;">        print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">sleeping 300,000ns</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#7AA2F7;">        sleep</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">3e-4</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#A9B1D6;">    </span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;\\n</span><span style="color:#9ECE6A;">0 warmup iters, 5 max iters, 0 min time, 1_000_000ns max time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    let</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> Benchmark</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">0</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 5</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 1_000_000</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">run</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">sleeper</span><span style="color:#9ABDF5;">]()</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">average time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">bench_args_2</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>0 warmup iters, 5 max iters, 0 min time, 1_000_000ns max time
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
average time 364582
</code></pre><h2 id="min-duration" tabindex="-1"><a class="header-anchor" href="#min-duration"><span>Min Duration</span></a></h2><p>Try with a minimum of 3 million nanoseconds, so it ignores the max iterations and runs 5 normal runs:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> bench_args</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> sleeper</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#0DB9D7;">        print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">sleeping 300,000ns</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#7AA2F7;">        sleep</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">3e-4</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    let</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> Benchmark</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">0</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 2</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 1_500_000</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 1_000_000_000</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">run</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">sleeper</span><span style="color:#9ABDF5;">]()</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">average time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">bench_args</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
average time 366545
</code></pre><h2 id="warmup" tabindex="-1"><a class="header-anchor" href="#warmup"><span>Warmup</span></a></h2><p>You should always have some warmup iterations, there is some extra logic for more accurate results so it won&#39;t run exactly what you specify:</p><div class="language-mojo" data-ext="mojo" data-title="mojo"><pre class="shiki tokyo-night" style="background-color:#1a1b26;color:#a9b1d6;" tabindex="0"><code><span class="line"><span style="color:#BB9AF7;">fn</span><span style="color:#7AA2F7;"> bench_args</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#BB9AF7;">    fn</span><span style="color:#7AA2F7;"> sleeper</span><span style="color:#9ABDF5;">():</span></span>
<span class="line"><span style="color:#0DB9D7;">        print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">sleeping 300,000ns</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"><span style="color:#7AA2F7;">        sleep</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">3e-4</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9D7CD8;font-style:italic;">    let</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#89DDFF;"> =</span><span style="color:#7AA2F7;"> Benchmark</span><span style="color:#9ABDF5;">(</span><span style="color:#FF9E64;">1</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 2</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#FF9E64;"> 1_000_000_000</span><span style="color:#9ABDF5;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A9B1D6;">run</span><span style="color:#9ABDF5;">[</span><span style="color:#A9B1D6;">sleeper</span><span style="color:#9ABDF5;">]()</span></span>
<span class="line"><span style="color:#0DB9D7;">    print</span><span style="color:#9ABDF5;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#9ECE6A;">average time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C0CAF5;"> nanoseconds</span><span style="color:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7AA2F7;">bench_args</span><span style="color:#9ABDF5;">()</span></span>
<span class="line"></span></code></pre></div><pre><code>sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
sleeping 300,000ns
average time 364094
</code></pre>`,17);function B(d,m){const p=a("ExternalLinkIcon"),e=a("CommentService");return c(),r("div",null,[y,n("p",null,[s("There is a lot going on under the hood, and so you should always test your assumptions with benchmarks, especially if you're adding complexity because you "),F,s(" it will improve performance, "),n("a",D,[s("which often isn't the case"),l(p)]),s(".")]),A,l(e)])}const u=t(i,[["render",B],["__file","Benchmark.html.vue"]]),g=JSON.parse('{"path":"/guides/std/Benchmark.html","title":"Benchmark","lang":"en-US","frontmatter":{"title":"Benchmark","categories":"Benchmark","usage":"Pass in a closure that returns None as a parameter to benchmark its speed in nanoseconds"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"General Usage","slug":"general-usage","link":"#general-usage","children":[]},{"level":2,"title":"Max iters","slug":"max-iters","link":"#max-iters","children":[]},{"level":2,"title":"Max Duration","slug":"max-duration","link":"#max-duration","children":[]},{"level":2,"title":"Min Duration","slug":"min-duration","link":"#min-duration","children":[]},{"level":2,"title":"Warmup","slug":"warmup","link":"#warmup","children":[]}],"filePathRelative":"guides/std/Benchmark.md","git":{"createdTime":1692819390000,"updatedTime":1692819390000}}');export{u as comp,g as data};
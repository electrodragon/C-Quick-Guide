function gotoProjects() {
  window.location = "projects.html";
}

function goto_index() {
  window.location = "index.html";
}

function solution_box_empty() {
  document.getElementById('solution_box').innerHTML = '';
  document.getElementById('solution_box').style = "padding:0";
}

function mkQuestion(num,q) {
  document.write(`<p class="ubuntu-font" onclick="project${num}_solution();">${num}. ${q}</p>`);
}

function space(num) {
  let spc = ''
  for (let i=1; i<=num; i++) {
    spc += '&nbsp;';
  }
  return spc;
}

function write_solution(solution) {
  let content = '';
  solution.forEach(function (item){
    content += '<p>'+item+'</p>';
  });

  if (document.getElementById('solution_box').innerHTML != '') {
    solution_box_empty();
  } else {
    document.getElementById('solution_box').innerHTML = content;
    document.getElementById('solution_box').style = "padding: 10px 0 10px 10px;";
  }
}

function project1_solution() {
  write_solution([
    '#include &lt;stdio.h&gt;',
    space(1),
    'int main() &#123;',
    space(4)+'int i = 1;',
    space(4)+'while (i&lt;=10) &#123;',
    space(8)+'if (i%2 != 0) &#123;',
    space(12)+'printf(&quot;%d&#92;n&quot;,i);',
    space(8)+'&#125;',
    space(8)+'i++;',
    space(4)+'&#125;',
    space(4)+'return 0;',
    '&#125;'
  ]);
}

function project2_solution() {
  write_solution([
    '#include &lt;stdio.h&gt;',
    space(1),
    'int main() &#123;',
    space(4)+'int i;',
    space(4)+'for (i=1; i&lt;=10; i++) &#123;',
    space(8)+'if (i%2 == 0) &#123;',
    space(12)+'printf(&quot;%d&#92;n&quot;,i);',
    space(8)+'&#125;',
    space(4)+'&#125;',
    space(4)+'return 0;',
    '&#125;'
  ]);
}

function project3_solution() {
  write_solution([
    '#include &lt;stdio.h&gt;',
    space(1),
    'int main() &#123;',
    space(4)+'int i = 10;',
    space(4)+'do &#123;',
    space(8)+'printf(&quot;%d&#92;n&quot;,i);',
    space(8)+'i--;',
    space(4)+'&#125; while (i &gt;= 1);',
    space(4)+'return 0;',
    '&#125;'
  ]);
}

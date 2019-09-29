function gotoProjects() {
  window.location = "projects.html";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function goto_index() {
  window.location = "index.html";
}

function solution_box_empty() {
  let all_boxes = document.querySelectorAll('.solution_box');
  for (let i=1; i<=all_boxes.length; i++) {
    document.querySelectorAll(`.project${i}_solution_bx`)[0].innerHTML = '';
    document.querySelectorAll(`.project${i}_solution_bx`)[0].style = 'padding:0;';
  }
}

function mkQuestion(num,q) {
  document.write('<div class="solution">');
  document.write(`<p class="ubuntu-font" onclick="project${num}_solution();">${num}. ${q}</p>`);
  document.write(`<div class="solution_box project${num}_solution_bx" onclick="solution_box_empty()"></div>`);
  document.write('</div>');
}

function space(num) {
  let spc = ''
  for (let i=1; i<=num; i++) {
    spc += '&nbsp;';
  }
  return spc;
}

function create_content(solution) {
  let content = '';
  solution.forEach(function (item){
    content += '<p>'+item+'</p>';
  });
  return content;
}

function write_solution(solution,output,num) {
  let prevContent = document.getElementsByClassName(`project${num}_solution_bx`)[0].innerHTML;
  solution = create_content(solution);
  output = create_content(output);

  if (num === 5) {
    let prevOutput = document.querySelectorAll('.project5_solution_bx')[0].innerText.slice(0,5);
    solution_box_empty();
    if (prevOutput == "Enter") {
      document.getElementsByClassName(`project${num}_solution_bx`)[0].innerHTML = solution;
    } else {
      document.getElementsByClassName(`project${num}_solution_bx`)[0].innerHTML = output;
    }
  } else {
    solution_box_empty();
    if (prevContent === output) {
      document.getElementsByClassName(`project${num}_solution_bx`)[0].innerHTML = solution;
    } else {
      document.getElementsByClassName(`project${num}_solution_bx`)[0].innerHTML = output;
    }
  }
  document.getElementsByClassName(`project${num}_solution_bx`)[0].style = "padding: 10px 10px 10px 10px;";
}

function project1_solution() {
  let odds = []
  for (let i=1; i<=10; i++) {
    if (i%2 != 0) {
      odds.push(i);
    }
  }
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
  ],odds,1);
}

function project2_solution() {
  let odds = []
  for (let i=1; i<=10; i++) {
    if (i%2 == 0) {
      odds.push(i);
    }
  }
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
  ],odds,2);
}

function project3_solution() {
  let descending = [];
  for (let i=10; i>=1; i--) {
    descending.push(i);
  }
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
  ],descending,3);
}

function project4_solution() {
  write_solution([
    '#include &lt;stdio.h&gt;',
    space(1),
    'int main() &#123;',
    space(4)+'int a,b;',
    space(4)+'printf("Enter First Number: ");',
    space(4)+'scanf("%d", &a);',
    space(4)+'printf("Enter Second Number: ");',
    space(4)+'scanf("%d", &b);',
    space(4)+'if (a > b) &#123;',
    space(8)+'printf(&quot;%d is Bigger than %d !&#92;n&quot;, a, b);',
    space(4)+'&#125; else &#123;',
    space(8)+'printf(&quot;%d is Bigger than %d !&#92;n&quot;, b, a);',
    space(4)+'&#125;',
    space(4)+'return 0;',
    '&#125;'
  ],[
    "Enter First Number: 5",
    "Enter Second Number: 7",
    "7 is Bigger than 5 !"
  ],4);
}

function project5_solution() {
  let random_num = getRandomInt(2,10);
  let output = [`Enter Number: ${random_num}`];
  let i = random_num;
  for(; i>=1; i--) {
    let str = '';
    for (let j=1; j<=i; j++) {
      str += '*';
    }
    output.push(str);
  }

  write_solution([
    '#include &lt;stdio.h&gt;',
    'int print_stars(int count);',
    space(1),
    'int main() &#123;',
    space(4)+'int a;',
    space(4)+'printf("Enter Number: ");',
    space(4)+'scanf(&quot;%d&quot;, &amp;a);',
    space(4)+'for (; a &gt;= 1; a--) &#123;',
    space(8)+'print_stars(a);',
    space(4)+'&#125;',
    space(4)+'return 0;',
    '&#125;',
    space(1),
    'int print_stars(int count) &#123;',
    space(4)+'int i;',
    space(4)+'for (i=1; i<=count; i++) &#123;',
    space(8)+'printf(&quot;*&quot;);',
    space(4)+'&#125;',
    space(4)+'printf("&#92;n");',
    '&#125;',
  ],output,5);
}

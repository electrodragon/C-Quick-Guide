document.write('    <div id="file_handling" class="topic">');
document.write('      <div class="topic-name mb-4">');
document.write('        <h2>File Handling / Management</h2>');
document.write('      </div>');
document.write('      <div class="topic-body">');
document.write('        <h3>Pointer:</h3>');
document.write('        <p class="mb-0 ml-4">To Open A File, we need a pointer !</p>');
document.write('        <p class="mb-0 ml-4">Pointer is also like a variable, but it starts with <span class="text-warning random3">*</span> (Asterisk)</p>');
document.write('        <p class="ml-4">DataType for file is <span class="text-warning random3">FILE</span></p>');
document.write('        <p class="code_block">FILE <span class="text-primary">*abc</span>;</p>');
document.write('        <h3>fopen()</h3>');
document.write('        <p class="ml-4"><span class="text-warning random3">fopen(<span class="random6">file_path</span>,<span class="random6">opening_mode</span>);</span> this function is used to open a file.</p>');
document.write('        <p class="mb-3 code_block"><span class="text-primary">abc</span> = fopen(<span class="random5">&quot;file.txt&quot;</span>,<span class="random5">&quot;a+&quot;</span>)</p>');
document.write('        <h3 class="mb-3 mt-4">Opening Modes:</h3>');
document.write('        <table class="table table-bordered table-hover table-warning">');
document.write('          <tr>');
document.write('            <th>Name</th>');
document.write('            <th>Mode</th>');
document.write('            <th class="random3 random5">File Open Success</th>');
document.write('            <th class="text-warning">File !Exist</th>');
document.write('            <th class="text-danger">Error</th>');
document.write('            <th class="text-center text-primary">Access</th>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="pt-4">Read</td>');
document.write('            <td class="random3 random5 pt-4">"r"</td>');
document.write('            <td>');
document.write('              <ul class="mb-0">');
document.write('                <li><span class="random3">fopen()</span> Loads it in Memory. </li>');
document.write('                <li>sets *pointer Point to First Character.</li>');
document.write('              </ul>');
document.write('            </td>');
document.write('            <td colspan="2" class="text-center random3 pt-4">return NULL;</td>');
document.write('            <td class="text-center pt-4 random7 bold">R</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="pt-4">Read</td>');
document.write('            <td class="random3 random5 pt-4">"r+"</td>');
document.write('            <td>');
document.write('              <ul class="mb-0">');
document.write('                <li><span class="random3">fopen()</span> Loads it in Memory. </li>');
document.write('                <li>sets *pointer Point to First Character.</li>');
document.write('              </ul>');
document.write('            </td>');
document.write('            <td colspan="2" class="text-center random3 pt-4">return NULL;</td>');
document.write('            <td class="text-center pt-4 random7 bold">RW</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td>Write</td>');
document.write('            <td class="random3 random5">"w"</td>');
document.write('            <td>');
document.write('              <ul class="mb-0">');
document.write('                <li>Contents are overwritten</li>');
document.write('              </ul>');
document.write('            </td>');
document.write('            <td>Creates File</td>');
document.write('            <td class="random3">return NULL;</td>');
document.write('            <td class="text-center random7 bold">W</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td>Write</td>');
document.write('            <td class="random3 random5">"w+"</td>');
document.write('            <td>');
document.write('              <ul class="mb-0">');
document.write('                <li>Contents are overwritten</li>');
document.write('              </ul>');
document.write('            </td>');
document.write('            <td>Creates File</td>');
document.write('            <td class="random3">return NULL;</td>');
document.write('            <td class="text-center random7 bold">RW</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="pt-4">Append</td>');
document.write('            <td class="random3 random5 pt-4">"a"</td>');
document.write('            <td>');
document.write('              <ul class="mb-0">');
document.write('                <li><span class="random3">fopen()</span> Loads it in Memory. </li>');
document.write('                <li>sets *pointer Point to Last Character.</li>');
document.write('              </ul>');
document.write('            </td>');
document.write('            <td class="pt-4">Creates File</td>');
document.write('            <td class="random3 pt-4">return NULL;</td>');
document.write('            <td class="text-center random7 bold pt-4">W</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="pt-4">Append</td>');
document.write('            <td class="random3 random5 pt-4">"a+"</td>');
document.write('            <td>');
document.write('              <ul class="mb-0">');
document.write('                <li><span class="random3">fopen()</span> Loads it in Memory. </li>');
document.write('                <li>sets *pointer Point to Last Character.</li>');
document.write('              </ul>');
document.write('            </td>');
document.write('            <td class="pt-4">Creates File</td>');
document.write('            <td class="random3 pt-4">return NULL;</td>');
document.write('            <td class="text-center random7 bold pt-4">RW</td>');
document.write('          </tr>');
document.write('        </table>');
document.write('        <h3 class="mt-5">fclose()</h3>');
document.write('        <p class="ml-4">Used To Close a File.</p>');
document.write('        <p class="code_block">fclose(<span class="random6">pointer</span>);</p>');
document.write('        <h3 class="mt-5">fputc()</h3>');
document.write('        <p class="ml-4">Used To Write a Character in File.</p>');
document.write('        <p class="code_block">fputc(<span class="random5">&apos;A&apos;</span>,<span class="random6">pointer</span>);</p>');
document.write('        <h3 class="mt-5">fputs()</h3>');
document.write('        <p class="ml-4">Used To Write String in File.</p>');
document.write('        <p class="code_block">fputs(<span class="random5">&quot;All is Well !&quot;</span>,<span class="random6">pointer</span>);</p>');
document.write('        <h3 class="mt-5">fprintf()</h3>');
document.write('        <p class="ml-4">Used To Write Formatted String in File.</p>');
document.write('        <p class="code_block">fprintf(<span class="random6">pointer</span>,<span class="random5">&quot;I Love You !&quot;</span>);</p>');
document.write('        <div class="code_box_long mt-5">');
document.write('          <p>int <span class="random6">a</span> = <span class="text-warning">5</span>;</p>');
document.write('          <p>fprintf(<span class="random6">pointer</span>,<span class="random5">&quot;Math Loves <span class="random9">%d</span>&quot;</span>,<span class="random7">a</span>);</p>');
document.write('        </div>');
document.write('        <h3 class="mt-5">EOL</h3>');
document.write('        <p class="ml-4">End of File</p>');
document.write('        <h3 class="mt-5 mb-4">INBUILT FUNCTIONS FOR FILE HANDLING</h3>');
document.write('        <table class="table table-bordered table-striped table-danger table-hover">');
document.write('          <tr>');
document.write('            <th>Functions</th>');
document.write('            <th>Description</th>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fopen()</td>');
document.write('            <td>Creates a new file or opens an existing file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fclose()</td>');
document.write('            <td>Closes an opened file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">getw()</td>');
document.write('            <td>Reads an integer from file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">putw()</td>');
document.write('            <td>Writes an integer to file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fgetc()</td>');
document.write('            <td>Reads a character from file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fputc()</td>');
document.write('            <td>Write a character to file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fgets()</td>');
document.write('            <td>Reads string from a file, one line at a time.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fputs()</td>');
document.write('            <td>Writes string to a file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">feof()</td>');
document.write('            <td>Finds end of file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fprintf()</td>');
document.write('            <td>Writes formatted data to a file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fscanf()</td>');
document.write('            <td>Reads formatted data from a file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fseek()</td>');
document.write('            <td>Moves file pointer position to given location.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">SEEK_SET</td>');
document.write('            <td>SEEK_SET moves file pointer position to the beginning of the file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">SEEK_CUR</td>');
document.write('            <td>SEEK_CUR moves file pointer position to given location.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">SEEK_END</td>');
document.write('            <td>SEEK_END moves file pointer position to the end of file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">ftell()</td>');
document.write('            <td>Gives current position of file pointer.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">rewind()</td>');
document.write('            <td>Moves file pointer position to the beginning of the file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">remove()</td>');
document.write('            <td>Deletes a file.</td>');
document.write('          </tr>');
document.write('          <tr>');
document.write('            <td class="random3 text-danger">fflush()</td>');
document.write('            <td>Flushes a file.</td>');
document.write('          </tr>');
document.write('        </table>');
document.write('        <h3 class="mt-5">Reading Data</h3>');
document.write('        <p class="ml-4">Loop is Used To Fetch/Read Data !</p>');
document.write('        <img class="example_image_1" src="images/file.txt.jpg" alt="file to read data from.">');
document.write('        <div class="file_content_reading_code">');
document.write('          <p><span class="text-info">char</span> ch;</p>');
document.write('          <p><span class="text-info">FILE</span> *zedd;</p>');
document.write('          <p class="mt-3">zedd = <span class="text-primary">fopen</span>(<span class="random5">&quot;file.txt&quot;</span>,<span class="random5">&quot;r&quot;</span>);</p>');
document.write('          <p class="mt-3"><span class="random6">while</span> ((ch = <span class="text-primary">fgetc</span>(zedd)) != <span class="text-warning">EOF</span>) &#123;</p>');
document.write('          <p class="ml-5 mt-2"><span class="text-primary">printf</span>(<span class="random5">&quot;</span><span class="random9">%c</span><span class="random5">&quot;</span>,ch);</p>');
document.write('          <p>&#125;</p>');
document.write('        </div>');
document.write('        <div class="file_content_reading_code_output mt-3">');
document.write('          <p>You make a weekend feel like a year</p>');
document.write('          <p>Baby, you got me changing</p>');
document.write('          <p>24/7, I want you here</p>');
document.write('          <p>I hope you feel the same thing</p>');
document.write('          <p class="mt-3"></p>');
document.write('          <p>I want you to be the one that&apos;s on my mind</p>');
document.write('          <p>On my mind, on my mind</p>');
document.write('          <p>I want you to be there on a Monday night</p>');
document.write('          <p>Tuesday night, every night</p>');
document.write('          <p>Are you gonna be the one that&apos;s on my mind?</p>');
document.write('          <p>3-6-5, all the time</p>');
document.write('          <p>I want you to be the one to stay</p>');
document.write('          <p>And give me the night and day</p>');
document.write('        </div>');
document.write('      </div>');
document.write('    </div>');

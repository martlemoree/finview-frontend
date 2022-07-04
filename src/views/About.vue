<template>
  <div class="about">
    <h1>About libview</h1>
    <p>This is a project work of a module called Web Technologies. It's part of the Business Informatics Bachelor's degree from HTW Berlin. The aim was to build a dynamic web page.</p>
    <h2>How to use it:</h2>
    <p>In the navigation bar you see the point Libraries. There you can find all of the libraries from the database and the information about them.</p>
    <p>For example in the header is the programming language as an icon on the left or the number of example projects where it is used. Furthermore you see the score which is the difference between up- and downvotes.</p>
    <p>You also see icons in some cases that give us additional information on the first view. These icons are:</p>
    <ul>
      <li><img src="../assets/new.png" height="24" width="24"> for a current added library (less than a day).</li>
      <li><img src="../assets/update.png" height="24" width="24"> for a current updated library (less than a day).</li>
      <li><img src="../assets/hot.png" height="24" width="24"> for a library that earned above 10 upvotes in less than 3 days.</li>
      <li><img src="../assets/badge.png" height="24" width="24"> for a library that earned above 100 upvotes and at least 50 downvotes less than upvotes.</li>
    </ul>
    <h3>What is not working?</h3>
    <p>At the moment there is no dynamic date algorithm for the icons behind the libraries. There are only some static dates behind it.</p>
    <p>Also the image icon that is shown every time even though there is no icon shouldn't be visible.</p>
    <p>Next up the number of the projects cannot be calculated.</p>
    <p>If the library is collapsed there are two buttons for up- and downvote, but none of these are increasing the field.</p>
    <p>Furthermore the information of the child entities should be shown in the collapsed body.</p>
    <h2>What could come in the future?</h2>
    <p>There could be an user login. So a user can favor libraries and get notifications when there are new updates.</p>
    <p>Functional up- and downvote system. So a user can only vote once for a library and the score is updated.</p>
    <p>The installations should be shown for different operating systems and package managers.</p>
    <p>The example projects with a short description and a github link.</p>
    <p>Would be useful with more libraries to show if you can filter and sort them.</p>
  </div>
</template>

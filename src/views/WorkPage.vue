<template>
  <h1>Work</h1>
  <!-- <ContentBlock>
    <template #header> Projects </template>
    <template #default>
      Welcome to my project section. Here you'll find a collection of my personal training projects,
      which I've created to practice and demonstrate specific skills, as well as some of my past
      work projects. Some of the projects include links to their website and source code, while
      others only have a picture and description because I don't have permission to share the code
      after leaving the job. I'm continually adding new projects to this section, so stay tuned for
      updates!-->

  <!-- Prefect Cloud/Server -->
  <!-- <ProjectBlock>
        <template #header> Prefect Cloud | Server </template>
        <template #images>
          <ThumbnailImage
            :imageLink="prefect1"
            alt="Prefect Cloud main dashboard in dark mode with D3 scatter plot"
          />
          <ThumbnailImage :imageLink="prefect2" alt="Prefect Cloud flow run details page" />
          <ThumbnailImage :imageLink="prefect4" alt="Prefect Cloud audit logs page" />
          <ThumbnailImage :imageLink="prefect3" alt="Prefect Server notifications page" />
        </template>
        <template #content>
          <p>
            During my time at Prefect, I worked on the development of Prefect Cloud and Prefect
            Server, two applications aimed at making data flow control more efficient and
            user-friendly for our clients. For certain projects, I was the sole UI Lead Engineer and
            responsible for leading the development of several pages and features for both
            applications.
          </p>
          <br />
          <p>
            One of the main goals of the project was to make the applications useful and pleasant to
            use for a wider range of users, including non-technical folks like project managers,
            finance, and marketing personnel. To achieve this goal, I worked on building and
            enhancing several UI dashboards, including the notifications, work pool, and work queue
            pages, from scratch.
          </p>
          <br />
          <p>
            In addition to these pages, I also worked on the development of various components that
            improved other parts of the applications. For example, I built the main scatterplot
            using D3 for visualizing data flow. Another significant feature I worked on was audit
            logs, a paid feature used to track workspace user activity for Prefect Cloud.
          </p>
          <br />
          <p>
            To build these applications, I utilized various tools and technologies, including Vue,
            TypeScript, Tailwind, and asynchronous programming techniques. I also worked with API to
            integrate the application with other services.
          </p>
          <br />
          <p>
            Throughout the development process, I aimed to make the applications efficient and
            visually appealing. The final products were both functional and aesthetically pleasing,
            delivering on the project's goal of making data flow control more efficient and
            user-friendly for our clients.
          </p>
        </template>
        <template #tools>
          <img :src="html" width="35" />
          <img :src="css" width="35" />
          <img :src="sass" width="35" />
          <img :src="tailwind" width="35" />
          <img :src="vuejs" width="35" />
          <img :src="typescript" width="35" />
          <img :src="d3" width="35" />
          <img :src="git" width="35" />
        </template>
        <template #links>
          <ExternalLink link="https://app.prefect.cloud/auth/login" text="Prefect Cloud" />
          <ExternalLink link="https://docs.prefect.io/ui/overview/" text="Docs" />
          <ExternalLink
            link="https://github.com/PrefectHQ/prefect"
            text="Prefect Server GitHub (Open-source)"
          />
        </template>
      </ProjectBlock> -->

  <!-- Prefect Design -->
  <!-- <ProjectBlock>
        <template #header> Prefect Design | Prefect UI Library | Vue Charts </template>
        <template #images>
          <ThumbnailImage :imageLink="prefect5" alt="Prefect Design component library" />
          <ThumbnailImage :imageLink="prefect6" alt="Prefect UI Library component library" />
        </template>
        <template #content>
          <p>
            As part of my work at Prefect, I contributed to the development of several component
            libraries that were used in Prefect Cloud and Prefect Server. These included Prefect
            Design, Prefect UI Library, and Vue Charts.
          </p>
          <br />
          <p>
            Prefect Design is an open source component library based on the Tailwind CSS framework.
            It contains a wide range of different components, including buttons, tables, forms, and
            more. This library was built to be highly flexible and customizable, making it suitable
            for a variety of different use cases.
          </p>
          <br />
          <p>
            Prefect UI Library, on the other hand, is a component library that was specifically
            designed for use in Prefect products. It contains key components that are critical to
            the functionality of the products, as well as more complex and technical components that
            are unique to Prefect. This library was built with Vue and TypeScript, and is based on
            Prefect Design.
          </p>
          <br />
          <p>
            Finally, Vue Charts is a charting package that was developed using the D3 and Vue
            frameworks. While this package can be used independently, it was specifically designed
            to meet the needs of Prefect products. The charts are highly customizable and can be
            easily integrated into other Vue-based applications.
          </p>
          <br />
          <p>
            Overall, these component libraries were built with love and attention to detail, using a
            combination of Vue, TypeScript, and Tailwind. They played a critical role in making
            Prefect Cloud and Prefect Server both functional and aesthetically pleasing, and helped
            to ensure that the user experience was both efficient and user-friendly.
          </p></template
        >
        <template #tools>
          <img :src="html" width="35" />
          <img :src="css" width="35" />
          <img :src="sass" width="35" />
          <img :src="tailwind" width="35" />
          <img :src="vuejs" width="35" />
          <img :src="typescript" width="35" />
          <img :src="d3" width="35" />
          <img :src="git" width="35" />
        </template>
        <template #links>
          <ExternalLink link="https://prefect-design.netlify.app/" text="Prefect Design" />
          <ExternalLink link="https://prefect-ui-library.netlify.app/" text="Prefect UI Library" />
          <ExternalLink
            link="https://prefect-vue-charts.netlify.app/scatter-plot"
            text="Prefect Vue Charts"
          />
          <ExternalLink
            link="https://github.com/PrefectHQ/prefect-design"
            text="Prefect Design GitHub (Open-source)"
          />
          <ExternalLink
            link="https://github.com/PrefectHQ/vue-charts"
            text="Prefect Vue Charts (Open-source)"
          />
        </template>
      </ProjectBlock> -->

  <!-- Carahsoft -->
  <!-- <ProjectBlock>
        <template #header> Carahsell | Carahsoft website </template>
        <template #images>
          <ThumbnailImage :imageLink="carahsoft1" alt="Carahsoft CRM system" />
          <ThumbnailImage :imageLink="carahsoft2" alt="Carahsoft CRM system" />
          <ThumbnailImage :imageLink="carahsoft3" alt="Carahsoft CRM system" />
        </template>
        <template #content>
          <p>
            During my time at Carahsoft, I had the opportunity to work on two major projects:
            Carahsell CRM and the Carahsoft website. Both projects required me to utilize my skills
            in C#, MySQL, .NET, HTML, and CSS.
          </p>
          <br />
          <p>
            For the Carahsell CRM project, I was responsible for developing and implementing new
            features, optimizing existing code, and fixing bugs. I worked closely with the project
            team to ensure that the final product met the needs of the client and exceeded their
            expectations. Through this project, I gained experience in developing and maintaining
            large-scale enterprise software applications.
          </p>
          <br />
          <p>
            On the Carahsoft website project, I collaborated with the marketing team to design and
            implement website features and improvements. I was responsible for writing clean,
            efficient, and reusable code to ensure that the website was responsive and visually
            appealing.
          </p>
        </template>
        <template #tools>
          <img :src="html" width="35" />
          <img :src="css" width="35" />
          <img :src="csharp" width="35" />
          <img :src="dotnet" width="35" />
          <img :src="mysql" width="35" />
        </template>
        <template #links>
          <ExternalLink link="https://www.carahsoft.com/" text="Carahsoft Website" />
        </template>
      </ProjectBlock> -->

  <!-- History Reconsidered -->
  <!-- <ProjectBlock>
        <template #header> History Reconsidered </template>
        <template #content>
          <p>
            History Reconsidered is my first independent project, and it holds a special place in my
            heart as it was my personal challenge and a great learning opportunity. It's a fully
            functioning history blog that I built using Vue.js framework for the first time. The
            website has a modern and responsive design, and it allows users to browse and read
            historical articles.
          </p>
          <br />
          <p>
            Throughout the development process, I honed my skills in Vue.js, HTML, CSS, and
            JavaScript, and learned how to leverage the framework's capabilities to create a highly
            responsive and dynamic user interface.
          </p>
        </template>

        <template #tools>
          <img :src="html" width="35" />
          <img :src="sass" width="35" />
          <img :src="vuejs" width="35" />
          <img :src="git" width="35" />
        </template>

        <template #links>
          <ExternalLink link="https://www.historyreconsidered.net/" text="Website" />
          <ExternalLink
            link="https://github.com/marichka-offen/history-reconsidered"
            text="GitHub"
          />
        </template>
      </ProjectBlock> -->

  <!-- Let's Hang -->
  <!-- <ProjectBlock>
        <template #header> Let's Hang </template>
        <template #content>
          <p>
            Let's Hang, or Hangman, is a classic word-guessing game that challenges players to guess
            as many hidden words as possible before running out of tries. Originally created as the
            first project for my GA WDI program, the initial version had limited functionality and
            numerous bugs. However, after months of studying and practice, I rewrote the game from
            scratch, resulting in a fully functional, visually appealing, and well-structured game.
          </p>
          <br />
          <p>
            The game is based on simple JavaScript logic and incorporates a words-API to provide a
            wide variety of dictionary-based words for players to guess. Additionally, the game
            features basic SVG animation, adding a touch of fun and interactivity.
          </p>
          <br />
          <p>
            With its sleek design and smooth functionality, Let's Hang is a testament to my passion
            for coding and my dedication to continuous learning and improvement.
          </p></template
        >

        <template #tools>
          <img src="@/assets/icons/html.svg" width="35" />
          <img src="@/assets/icons/css.svg" width="35" />
          <img src="@/assets/icons/javascript.svg" width="35" />
          <img src="@/assets/icons/git.svg" width="35" />
        </template>

        <template #links>
          <ExternalLink link="https://lets-hang.netlify.com/" text="Game" />
          <ExternalLink link="https://github.com/marichka-offen/lets-hang-game" text="GitHub" />
        </template>
      </ProjectBlock>-->

  <!-- Pig Game -->
  <!--  <ProjectBlock>
        <template #header> Pig Game </template>
        <template #content>
          <p>
            Pig Game is a fun and engaging dice game that challenges players to make strategic
            decisions about whether or not to risk their current points for the possibility of
            earning even more. The game is designed to be simple and intuitive, with the goal of
            being the first player to reach a target score.
          </p>
          <br />
          <p>
            I created Pig Game as a project for the Complete JavaScript Course, and it was a
            resounding success from the start. Throughout the development process, I was able to
            deepen my understanding of JavaScript and its various features, as well as experiment
            with CSS to create a visually appealing and user-friendly interface.
          </p>
          <br />
          <p>
            One of the things I enjoyed most about working on Pig Game was the opportunity to
            explore the logic behind game development. I had to think carefully about the different
            possible outcomes of each roll and design the game accordingly, which allowed me to hone
            my problem-solving and critical thinking skills.
          </p></template
        >

        <template #tools>
          <img :src="html" width="35" />
          <img :src="css" width="35" />
          <img :src="javascript" width="35" />
          <img :src="git" width="35" />
        </template>

        <template #links>
          <ExternalLink link="http://pig-game-learning-experience.surge.sh/" text="Game" />
          <ExternalLink link="http://pig-game-learning-experience.surge.sh/" text="GitHub" />
        </template>
      </ProjectBlock> -->

  <!-- Natours -->
  <!-- <ProjectBlock>
        <template #header> Natours | Trillo | Nexter</template>
        <template #content>
          <p>
            Natours, Trillo, and Nexter are three web development projects that I completed during
            my Advanced CSS and Sass course. These projects were designed to help me hone my skills
            in advanced CSS techniques, such as animations, grids, and flexboxes. Through these
            projects, I had the opportunity to experiment with CSS features and learn how to use
            them to create visually appealing and responsive websites.
          </p>
          <br />
          <p>
            One of the key takeaways from these projects was learning how to use Sass, a CSS
            preprocessor that allows for a more efficient workflow. Additionally, I learned how to
            use the BEM (Block Element Modifier) methodology to write clean and reusable code, which
            is essential for creating maintainable and scalable websites.
          </p>
          <br />
          <p>
            Overall, these projects were instrumental in my growth as a web developer, and I am
            proud of what I was able to accomplish. I am excited to continue building upon these
            skills and applying them to future projects.
          </p>
        </template>
        <template #tools>
          <img :src="html" width="35" />
          <img :src="sass" width="35" />
        </template>
        <template #links>
          <ExternalLink
            link="http://natours-learning-experience.surge.sh/"
            text="Natours Website"
          />
          <ExternalLink link="http://trillo-learning-experience.surge.sh/" text="Trillo Website" />
          <ExternalLink link="http://nexter-learning-experience.surge.sh/" text="Nexter Website" />
          <ExternalLink
            link="https://github.com/marichka-offen/CSS-project-1"
            text="Natours GitHub"
          />
          <ExternalLink
            link="https://github.com/marichka-offen/CSS-project-2"
            text="Trillo GitHub"
          />
          <ExternalLink
            link="https://github.com/marichka-offen/CSS-project-3"
            text="Nexter GitHub"
          />
        </template>
      </ProjectBlock>
    </template>
  </ContentBlock> -->
</template>

<script setup lang="ts">
  import ContentBlock from '@/components/ContentBlock.vue'
  import ProjectBlock from '@/components/ProjectBlock.vue'
  import ExternalLink from '@/components/ExternalLink.vue'
  import css from '@/assets/icons/css.svg'
  import d3 from '@/assets/icons/d3.svg'
  import html from '@/assets/icons/html.svg'
  import javascript from '@/assets/icons/javascript.svg'
  import react from '@/assets/icons/react.svg'
  import sass from '@/assets/icons/sass.svg'
  import typescript from '@/assets/icons/typescript.svg'
  import vuejs from '@/assets/icons/vuejs.svg'
  import git from '@/assets/icons/git.svg'
  import tailwind from '@/assets/icons/tailwind.svg'
  import dotnet from '@/assets/icons/dotnet.svg'
  import csharp from '@/assets/icons/csharp.svg'
  import mysql from '@/assets/icons/mysql.svg'
  import prefect1 from '@/assets/images/prefect-dashboard.png'
  import prefect2 from '@/assets/images/prefect-flow-run.png'
  import prefect3 from '@/assets/images/prefect-notifications.png'
  import prefect4 from '@/assets/images/prefect-audit-logs.png'
  import prefect5 from '@/assets/images/prefect-design.png'
  import prefect6 from '@/assets/images/prefect-ui.png'
  import carahsoft1 from '@/assets/images/carahsoft1.png'
  import carahsoft2 from '@/assets/images/carahsoft2.png'
  import carahsoft3 from '@/assets/images/carahsoft3.png'
  import ThumbnailImage from '@/components/ThumbnailImage.vue'
</script>

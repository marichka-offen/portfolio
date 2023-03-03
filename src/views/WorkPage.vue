<template>
  <ContentBlock>
    <template #header> Projects </template>
    <template #default>
      Welcome to my project section. Here you'll find a collection of my personal training projects,
      which I've created to practice and demonstrate specific skills, as well as some of my past
      work projects. Some of the projects include links to their website and source code, while
      others only have a picture and description because I don't have permission to share the code
      after leaving the job. I'm continually adding new projects to this section, so stay tuned for
      updates!

      <!-- Prefect Cloud/Server -->
      <ProjectBlock>
        <template #header> Prefect Cloud/Server </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget
            aliquam tincidunt, nisl nisl aliquam tortor, vitae aliquam nisl nisl eget nisl. Sed
            tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam tortor, vitae aliquam nisl
            nisl eget nisl.
          </p>
        </template>
        <template #tools>
          <img src="@/assets/icons/html.svg" width="35" />
          <img src="@/assets/icons/css.svg" width="35" />
          <img src="@/assets/icons/sass.svg" width="35" />
          <img src="@/assets/icons/tailwind.svg" width="35" />
          <img src="@/assets/icons/vuejs.svg" width="35" />
          <img src="@/assets/icons/typescript.svg" width="35" />
          <img src="@/assets/icons/d3.svg" width="35" />
          <img src="@/assets/icons/git.svg" width="35" />
        </template>
        <template #links>
          <ExternalLink link="https://app.prefect.cloud/auth/login" text="Prefect Cloud" />
          <ExternalLink link="https://docs.prefect.io/ui/overview/" text="Docs" />
          <ExternalLink
            link="https://github.com/PrefectHQ/prefect"
            text="Prefect Server GitHub (Open-source)"
          />
        </template>
      </ProjectBlock>

      <!-- Prefect Design -->
      <ProjectBlock>
        <template #header> Prefect Design / Prefect UI Library / Vue Charts </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget
            aliquam tincidunt, nisl nisl aliquam tortor, vitae aliquam nisl nisl eget nisl. Sed
            tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam tortor, vitae aliquam nisl
            nisl eget nisl.
          </p></template
        >
        <template #tools>
          <img src="@/assets/icons/html.svg" width="35" />
          <img src="@/assets/icons/css.svg" width="35" />
          <img src="@/assets/icons/sass.svg" width="35" />
          <img src="@/assets/icons/tailwind.svg" width="35" />
          <img src="@/assets/icons/vuejs.svg" width="35" />
          <img src="@/assets/icons/typescript.svg" width="35" />
          <img src="@/assets/icons/d3.svg" width="35" />
          <img src="@/assets/icons/git.svg" width="35" />
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
      </ProjectBlock>

      <!-- Carahsoft -->
      <ProjectBlock>
        <template #header> Carahsell / Carahsoft website </template>
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
          <img src="@/assets/icons/html.svg" width="35" />
          <img src="@/assets/icons/css.svg" width="35" />
          <img src="@/assets/icons/csharp.svg" width="35" />
          <img src="@/assets/icons/dotnet.svg" width="35" />
          <img src="@/assets/icons/mysql.svg" width="35" />
        </template>
        <template #links>
          <ExternalLink link="https://www.carahsoft.com/" text="Carahsoft Website" />
        </template>
      </ProjectBlock>

      <!-- History Reconsidered -->
      <ProjectBlock>
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
          <img src="@/assets/icons/html.svg" width="35" />
          <img src="@/assets/icons/sass.svg" width="35" />
          <img src="@/assets/icons/vuejs.svg" width="35" />
          <img src="@/assets/icons/git.svg" width="35" />
        </template>

        <template #links>
          <ExternalLink link="https://www.historyreconsidered.net/" text="Website" />
          <ExternalLink
            link="https://github.com/marichka-offen/history-reconsidered"
            text="GitHub"
          />
        </template>
      </ProjectBlock>

      <!-- Let's Hang -->
      <ProjectBlock>
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
      </ProjectBlock>

      <!-- Pig Game -->
      <ProjectBlock>
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
          <img src="@/assets/icons/html.svg" width="35" />
          <img src="@/assets/icons/css.svg" width="35" />
          <img src="@/assets/icons/javascript.svg" width="35" />
          <img src="@/assets/icons/git.svg" width="35" />
        </template>

        <template #links>
          <ExternalLink link="http://pig-game-learning-experience.surge.sh/" text="Game" />
          <ExternalLink link="http://pig-game-learning-experience.surge.sh/" text="GitHub" />
        </template>
      </ProjectBlock>

      <!-- Natours -->
      <ProjectBlock>
        <template #header> Natours / Trillo / Nexter</template>
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
          <img src="@/assets/icons/html.svg" width="35" />
          <img src="@/assets/icons/sass.svg" width="35" />
        </template>
      </ProjectBlock>
    </template>
  </ContentBlock>
</template>

<script setup lang="ts">
  import ContentBlock from '@/components/ContentBlock.vue'
  import ProjectBlock from '@/components/ProjectBlock.vue'
  import ExternalLink from '@/components/ExternalLink.vue'
</script>

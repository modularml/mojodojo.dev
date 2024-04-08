# Guides

<script>
  import pages from '@temp/pages'
  export default {
    computed: {
      intro() {
        return this.sortByCategories(
            pages.filter(p => p.path.indexOf('/guides/intro-to-mojo/') >= 0)
        )
      },
    },
    methods: {
      sortByCategories(pages) {
        return pages.sort((a, b) => a.frontmatter.categories.localeCompare(b.frontmatter.categories))
      },
    }
  }
</script>

## Intro to Mojo

_This guide is in the early stages, feedback welcome [on Github](https://github.com/mojodojodev/mojodojo.dev/discussions/categories/feedback)_

<table>
  <tr>
    <th>Chapter</th>
    <th>Description</th>
  </tr>
  <tr v-for="chapter in intro">
   <td><a :href="chapter.path">{{ chapter.frontmatter.categories }}</a></td>
   <td style="white-space: pre-wrap;">{{ chapter.frontmatter.usage }}</td>
  </tr>
</table>

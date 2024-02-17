<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Contato',

    metaInfo: { title: 'Contato' },

    extends: View,

    mixins: [
      LoadSections(['contact-us']),
    ],

    props: {
      id: {
        type: String,
        default: 'contato',
      },
    },
  }
</script>

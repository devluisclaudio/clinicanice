<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Serviços',

    metaInfo: { title: 'Serviços' },

    extends: View,

    mixins: [
      LoadSections(['services']),
    ],

    props: {
      id: {
        type: String,
        default: 'servico',
      },
    },
  }
</script>

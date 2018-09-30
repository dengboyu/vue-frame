import Vue from 'vue'
import svgIcon from '@/mousika/components/svgIcon/svgIcon'

//register global
Vue.component('svg-icon',svgIcon);

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)


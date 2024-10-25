mport {namedWayspotComponent} from './named-wayspot'
AFRAME.registerComponent('named-wayspot', namedWayspotComponent)

import {playVpsAnimationComponent} from './vps-animation'
AFRAME.registerComponent('play-vps-animation', playVpsAnimationComponent)

import {shadowShaderComponent} from './shadow-shader'
AFRAME.registerComponent('shadow-shader', shadowShaderComponent)

import {hiderMaterialComponent} from './hider-material'
AFRAME.registerComponent('hider-material', hiderMaterialComponent)

import {desktopDevelopmentComponent} from './desktop-development'
AFRAME.registerComponent('desktop-development', desktopDevelopmentComponent)

// Check Location Permissions at beginning of session
const errorCallback = (error) => {
  if (error.code === error.PERMISSION_DENIED) {
    alert('LOCATION PERMISSIONS DENIED. PLEASE ALLOW AND TRY AGAIN.')
  }
}
navigator.geolocation.getCurrentPosition((pos) => {}, errorCallback)

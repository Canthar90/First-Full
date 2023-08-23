import { ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  cvDataContactInfo,
  cvDataEducation,
  cvDataExperience,
  cvDataSkill,
  cvDataFrame
} from '@/api/types'

import getCVData from '@/api/getCVData'

export const useAboutStore = defineStore('cv', () => {
  const cvEducation = ref<cvDataEducation[]>([])
  const cvContactInfo = ref<cvDataContactInfo>()
  const cvExperience = ref<cvDataExperience[]>([])
  const cvSkills = ref<cvDataSkill[]>([])
  const cvData = ref<cvDataFrame>()
  const cvDataFetched = ref(false)

  const GET_CV_DATA = async () => {
    cvData.value = await getCVData()
    cvEducation.value = cvData.value.Education
    cvContactInfo.value = cvData.value['Contact Information']
    cvExperience.value = cvData.value.Resume
    cvSkills.value = cvData.value.Skills

    cvDataFetched.value = true
  }

  return {
    cvEducation,
    cvContactInfo,
    cvExperience,
    cvSkills,
    cvData,
    cvDataFetched,
    GET_CV_DATA
  }
})

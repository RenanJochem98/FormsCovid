import * as storage from '../../services/storage'

export const getTutor = ({ tutor }) => {
  if (!tutor) {
    tutor = storage.getLocalTutor()
  }
  return tutor
}

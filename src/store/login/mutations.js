export const updateCpf = (state, payload) => {
  console.log('Mutation chamada', payload)
  state.cpf = payload
}

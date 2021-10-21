export const getAddressByCep = (cep) => {
    let address = {
      address: '',
      neighbourhood: '',
      city: '',
      state: '',
      error: false
    };
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) {
          address.address = '';
          address.neighbourhood = '';
          address.city = '';
          address.state = '';
          address.error = true;
        } else {
          address.address = data.logradouro;
          address.neighbourhood = data.bairro;
          address.city = data.localidade;
          address.state = data.uf;
          address.ibge = data.ibge;
          address.error = false;
          return address;
        }
      })
      .catch((err) => {
        address.error = true;
      })
      .finally(() => {
        return address;
      });
};
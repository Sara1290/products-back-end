module.exports = {
    create: (req, res, next)  => {
        const dbInstance = req.app.get('db');
        const { NAME, DESCRIPTION, PRICE, IMAGE_URL } = req.body;

        dbInstance.create_product([NAME, DESCRIPTION, PRICE, IMAGE_URL])
            .then(() => res.sendStatus(200))
            .catch( err => {
            res.status(500).send({errorMessage: "Internal Error, Come Back Later"});
            console.log(err)
      });
    },
    getOne: ( req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.read_product(id)
          .then(product => res.status(200).send(product))
          .catch( err => {
            res.status(500).send({errorMessage: "Internal Error, Come Back Later"});
            console.log(err)
          });
      },

      getAll: (req, res) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_products()
          .then(products => res.status(200).send(products))
          .catch(err => {
            res.status(500).send({ errorMessage: "Internal Error, Come Back Later" });
            console.log(err)
          });
      },

      update: ( req, res) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_product([params.id, query.desc])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Internal Error, Come Back Later"});
            console.log(err)
          } );
      },

    delete: ( req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.delete_product(id)
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Internal Error, Come Back Later"});
        console.log(err)
      } );
  }
};

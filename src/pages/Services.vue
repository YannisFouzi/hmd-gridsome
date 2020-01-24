<template>
  <Layout>
    <div class="container has-text-centered">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title">Services</h1>
          <h2
            class="subtitle"
          >HMD Audit & Conseil développe des compétences sectorielles et variées pour mettre en place des solutions qui répondent à vos attentes</h2>
          <div class="buttons is-centered">
            <b-button size="is-large" type="is-primary">Prendre un rendez-vous</b-button>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <g-image src="~/assets/gris.svg" />
                </div>
                <div class="card-content">
                  <p class="title is-4">Service Fiscal</p>
                  <a href="#">Détails</a>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <g-image src="~/assets/gris.svg" />
                </div>
                <div class="card-content">
                  <p class="title is-4">Service Comptable et Financier</p>
                  <a href="#">Détails</a>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <g-image src="~/assets/gris.svg" />
                </div>
                <div class="card-content">
                  <p class="title is-4">Audit légal – Due Diligences</p>
                  <a href="#">Détails</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div>
          <div class="columns is-vcentered">
            <div class="column">
              <span class="title is-size-1">Service fiscal</span>
              <h3 class="title">Préparation de l’impôt sur les sociétés</h3>
              <p>
                - Fiscalité de groupe
                <br />- Audit & Compilation
                <br />- Intégration fiscale
                <br />- Régime de groupe
              </p>
            </div>
            <div class="column">
              <g-image src="~/assets/accountant-icon-1-green.png" />
              <br />
              <b-button size="is-large" type="is-success">Prendre un rendez-vous</b-button>
            </div>
          </div>

          <div class="columns is-vcentered">
            <div class="column">
              <span class="title is-size-1">Planification Financière</span>
              <h3 class="title">Il n’est jamais trop tôt ou trop tard pour commencer !</h3>
              <p>
                - Budgétiser sa retraite
                <br />- Comprendre sa pension retraite
                <br />- Comprendre les services associés
                <br />- Anticiper et planifier sa retraite
              </p>
            </div>
            <div class="column">
              <g-image src="~/assets/accountant-icon-3-green.png" />
              <br />
              <b-button size="is-large" type="is-success">Prendre un rendez-vous</b-button>
            </div>
          </div>

          <div class="columns is-vcentered">
            <div class="column">
              <span class="title is-size-1">Juridique</span>
              <h3 class="title">Une situation difficile? Nous pouvons vous aider</h3>
              <p>
                - Préparation des Statuts de votre entité
                <br />- Préparation des Assemblées Générales
                <br />- Modifications juridiques
                <br />- Montages juridiques
              </p>
            </div>
            <div class="column">
              <g-image src="~/assets/accountant-icon-4-green.png" />
              <br />
              <b-button size="is-large" type="is-success">Prendre un rendez-vous</b-button>
            </div>
          </div>

          <div class="columns is-vcentered">
            <div class="column">
              <span class="title is-size-1">Management</span>
              <h3 class="title">Externalisation</h3>
              <p>
                - Tenue
                <br />- Révision
                <br />- Audit & Compilations
                <br />- Fiscalité
                <br />- Juridique
                <br />- Organisation
              </p>
            </div>
            <div class="column">
              <g-image src="~/assets/accountant-icon-5-green.png" />
              <br />
              <b-button size="is-large" type="is-success">Prendre un rendez-vous</b-button>
            </div>
          </div>

          <div class="columns is-vcentered">
            <div class="column">
              <span class="title is-size-1">Outils et Ressources</span>
              <p>
                Des outils financiers à votre disposition
                - Simulateurs divers
                <br />- Estimation des pensions retraites
                <br />- Calculateur d’intérêts financiers
                <br />
- Simulateur des réductions de cotisations
              </p>
            </div>
            <div class="column">
              <g-image src="~/assets/accountant-icon-2-green.png" />
              <br />
              <b-button size="is-large" type="is-success">Prendre un rendez-vous</b-button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Services"
  }
};
</script>
class AssociationAlgorithm {
  constructor (requiredPercentageForAsssociation = 10) {
    this.REQUIRED_PERCENTAGE_FOR_ASSOCIATION = requiredPercentageForAsssociation

    this.associations = {}
    this.searches = {}
  }

  #associate (id, query) {
    if (!this.associations[id]) { this.associations[id] = [] }

    this.associations[id].push(query)
  }

  #search (id, query) {
    if (!this.searches[id]) { this.searches[id] = [] }

    let search = Number(this.searches[id][query])

    if (!search) search = 0

    this.searches[id][query] = search + 1
  }

  // Main function to run the algorithm
  search (data) {
    const { id, views } = data.video
    const { query } = data.search

    if (!this.associations[id]) this.associations[id] = []

    this.#search(id, query)

    const percentageOfViewsFromSearch = (Number(this.searches[id][query]) / Number(views)) * 100

    if (percentageOfViewsFromSearch > this.REQUIRED_PERCENTAGE_FOR_ASSOCIATION) {
      // Associate the video with the search query

      this.#associate(id, query)
    } else {
      // The video does not have a high enough percentage of views from the query to be associated with it
    }
  }

  isVideoAssociated (id, query) {
    return this.associations[id] && this.associations[id].includes(query)
  }

  getAssociations (id) {
    return this.associations[id]
  }
}

export default AssociationAlgorithm

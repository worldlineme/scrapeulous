class Get extends HttpWorker {

  async crawl(url) {
    let result = await this.Got(url);
    return result.body;
  }

}
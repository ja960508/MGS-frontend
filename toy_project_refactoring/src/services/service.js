class Service {
  async getData(path) {
    const location = path ? path : "1";
    const result = await fetch(`/${location}`);

    return await result.json();
  }
}

export default Service;



class consolationApi {
  /**
   * @memberof consolationApi
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */

  // Issue #1 - Implement a backend that allows the Volunteer to get "online" and "disconnect" 
  static async volunteerOnline(req, res, next) {
    try {
      const result = `volunteerOnline`;
      res.set('Content-Type', 'text/xml');
      return res.status(200).send(result.toString());
    } catch (error) {
      return next(error);
    }
  } 
  static async volunteerDisconnect(req, res, next) {
    try {
      const result = `volunteerDisconnect`;
      res.set('Content-Type', 'text/xml');
      return res.status(200).send(result.toString());
    } catch (error) {
      return next(error);
    }
  }  
 
 
 

 
  
}

export default consolationApi;
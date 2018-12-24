/**
 * @author https://github.com/ryanvanderpol/expo-analytics
 * @
 */
import { Analytics, PageHit } from 'expo-analytics';
// TODO import { GoogleAnalyticsID } from '../../config';

let _tracker;

class AnalyticsService {
  static track({ screen }) {
    if (!_tracker) {
      tracker = new Analytics('UA-131116853-1');
    }
    tracker.hit(new PageHit(screen))
      .then(() => console.log('AnalyticsService Success', screen))
      .catch(e => console.log('AnalyticsService Error', e));
  }
}

export default AnalyticsService;

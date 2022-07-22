import { history } from 'umi';
import { consoleHistory as consoleHistoryUnderUtilsFolder } from '@/utils/consoleHistory';

// Bug 1: the history object consoled here is undefined
consoleHistoryUnderUtilsFolder();

export const onRouteChange = () => {
  // Bug 2: no matter the route change, histroy.location.pathname won't change
  console.log(history.location.pathname);
};

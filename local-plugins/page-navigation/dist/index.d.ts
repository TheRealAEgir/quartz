import { QuartzTransformerPlugin } from '@quartz-community/types';

interface PageNavigationOptions {
    file: string;
}
declare const PageNavigation: QuartzTransformerPlugin<PageNavigationOptions>;

export { PageNavigation, type PageNavigationOptions };

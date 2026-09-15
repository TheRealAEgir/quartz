import { QuartzTransformerPlugin } from '@quartz-community/types';

interface SyntaxVerifiedOptions {
    file: string;
    boundaries?: string;
    replaceUnderscoresInLinks?: boolean;
}
declare const SyntaxVerified: QuartzTransformerPlugin<SyntaxVerifiedOptions>;

export { SyntaxVerified, type SyntaxVerifiedOptions };

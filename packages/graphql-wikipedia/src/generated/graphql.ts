import { GraphQLResolveInfo } from 'graphql';
import { APIEmbeddedContext } from '../types/modules/context';
import { type GraphQLResolveInfo } from 'graphql';
import { type APIEmbeddedContext } from '../types/modules/context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type $RequireFields<Origin, Keys> = $Diff<Origin, Keys> & $ObjMapi<Keys, <Key>(k: Key) => $NonMaybeType<$ElementType<Origin, Key>>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Actions = {
   __typename?: 'Actions',
  /** Search the wiki using the OpenSearch protocol. */
  openSearch?: Maybe<Array<Maybe<OpenSearchResults>>>,
};


export type ActionsOpenSearchArgs = {
  searchString: Scalars['String'],
  options?: Maybe<OpenSearchOptions>
};

/** Customize openSearch behaviours. */
export type OpenSearchOptions = {
  /** Namespaces to search.Default:0.(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|100|101|108|109|118|119|446|447|...) */
  namespace?: Maybe<Scalars['Int']>,
  /** Maximum number of results to return.Default:10 */
  limit?: Maybe<Scalars['Int']>,
  /** Search profile to use.Default:engineAutoselect(strict|normal|fuzzy|fastFuzzy|classic|engineAutoselect) */
  profile?: Maybe<Profile>,
  /** 
 * Enable OpenSearch suggestions requested by MediaWiki. Set this to false if
   * you've disabled another suggestion script and want to reduce load caused by
   * cached scripts pulling suggestions.Default:true
 **/
  suggest?: Maybe<Scalars['Boolean']>,
  /** Return API warnings as error instead of ignoring them.Default:false */
  warningaserror?: Maybe<Scalars['Boolean']>,
};

export type OpenSearchResults = {
   __typename?: 'OpenSearchResults',
  /** Search result. */
  title?: Maybe<Scalars['String']>,
  /** A short description around search result. */
  description?: Maybe<Scalars['String']>,
  /** Link a actual article. */
  link?: Maybe<Scalars['String']>,
};

/** 
 * Search profile to use(
 * strict: Strict profile with few punctuation characters removed but diacritics and stress marks are kept.|
 * normal: Few punctuation characters, some diacritics and stopwords removed.|
 * fuzzy: Similar to normal with typo correction (two typos supported).|
 * fast-fuzzy: Experimental fuzzy profile (may be removed at any time).|
 * classic: Classic prefix, few punctuation characters and some diacritics removed.|
 * engine_autoselect: Let the search engine decide on the best profile to use.|
 * )
 **/
export enum Profile {
  Strict = 'strict',
  Normal = 'normal',
  Fuzzy = 'fuzzy',
  FastFuzzy = 'fastFuzzy',
  Classic = 'classic',
  EngineAutoselect = 'engineAutoselect'
}

export type Query = {
   __typename?: 'Query',
  wikipedia: Actions,
};


export type QueryWikipediaArgs = {
  language?: Maybe<WikipediaApiLanguage>
};

/** Represent fetched data language */
export enum WikipediaApiLanguage {
  En = 'en',
  Nl = 'nl'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  WikipediaAPILanguage: WikipediaApiLanguage,
  Actions: ResolverTypeWrapper<Actions>,
  String: ResolverTypeWrapper<Scalars['String']>,
  OpenSearchOptions: OpenSearchOptions,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Profile: Profile,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  OpenSearchResults: ResolverTypeWrapper<OpenSearchResults>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  WikipediaAPILanguage: WikipediaApiLanguage,
  Actions: Actions,
  String: Scalars['String'],
  OpenSearchOptions: OpenSearchOptions,
  Int: Scalars['Int'],
  Profile: Profile,
  Boolean: Scalars['Boolean'],
  OpenSearchResults: OpenSearchResults,
};

export type ActionsResolvers<ContextType = APIEmbeddedContext, ParentType extends ResolversParentTypes['Actions'] = ResolversParentTypes['Actions']> = {
  openSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenSearchResults']>>>, ParentType, ContextType, RequireFields<ActionsOpenSearchArgs, 'searchString'>>,
};

export type OpenSearchResultsResolvers<ContextType = APIEmbeddedContext, ParentType extends ResolversParentTypes['OpenSearchResults'] = ResolversParentTypes['OpenSearchResults']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = APIEmbeddedContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  wikipedia?: Resolver<ResolversTypes['Actions'], ParentType, ContextType, QueryWikipediaArgs>,
};

export type Resolvers<ContextType = APIEmbeddedContext> = {
  Actions?: ActionsResolvers<ContextType>,
  OpenSearchResults?: OpenSearchResultsResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = APIEmbeddedContext> = Resolvers<ContextType>;

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionSubscribeFn<Result, Parent, Context, Args> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => AsyncIterator<Result> | Promise<AsyncIterator<Result>>;

export type SubscriptionResolveFn<Result, Parent, Context, Args> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Result | Promise<Result>;

export interface SubscriptionSubscriberObject<Result, Key: string, Parent, Context, Args> {
  subscribe: SubscriptionSubscribeFn<{ [key: Key]: Result }, Parent, Context, Args>;
  resolve?: SubscriptionResolveFn<Result, { [key: Key]: Result }, Context, Args>;
}

export interface SubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe: SubscriptionSubscribeFn<mixed, Parent, Context, Args>;
  resolve: SubscriptionResolveFn<Result, mixed, Context, Args>;
}

export type SubscriptionObject<Result, Key: string, Parent, Context, Args> =
  | SubscriptionSubscriberObject<Result, Key, Parent, Context, Args>
  | SubscriptionResolverObject<Result, Parent, Context, Args>;

export type SubscriptionResolver<Result, Key: string, Parent = {}, Context = {}, Args = {}> =
  | ((...args: Array<any>) => SubscriptionObject<Result, Key, Parent, Context, Args>)
  | SubscriptionObject<Result, Key, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => ?Types;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<Result = {}, Parent = {}, Args = {}, Context = {}> = (
  next: NextResolverFn<Result>,
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Result | Promise<Result>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  WikipediaAPILanguage: WikipediaApiLanguage,
  Actions: ResolverTypeWrapper<Actions>,
  String: ResolverTypeWrapper<$ElementType<Scalars, 'String'>>,
  OpenSearchOptions: OpenSearchOptions,
  Int: ResolverTypeWrapper<$ElementType<Scalars, 'Int'>>,
  Profile: Profile,
  Boolean: ResolverTypeWrapper<$ElementType<Scalars, 'Boolean'>>,
  OpenSearchResults: ResolverTypeWrapper<OpenSearchResults>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  WikipediaAPILanguage: WikipediaApiLanguage,
  Actions: Actions,
  String: $ElementType<Scalars, 'String'>,
  OpenSearchOptions: OpenSearchOptions,
  Int: $ElementType<Scalars, 'Int'>,
  Profile: Profile,
  Boolean: $ElementType<Scalars, 'Boolean'>,
  OpenSearchResults: OpenSearchResults,
};

export type ActionsResolvers<ContextType = APIEmbeddedContext, ParentType = $ElementType<ResolversParentTypes, 'Actions'>> = {
  openSearch?: Resolver<?Array<?$ElementType<ResolversTypes, 'OpenSearchResults'>>, ParentType, ContextType, $RequireFields<ActionsOpenSearchArgs, { searchString: * }>>,
};

export type OpenSearchResultsResolvers<ContextType = APIEmbeddedContext, ParentType = $ElementType<ResolversParentTypes, 'OpenSearchResults'>> = {
  title?: Resolver<?$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  description?: Resolver<?$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
  link?: Resolver<?$ElementType<ResolversTypes, 'String'>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = APIEmbeddedContext, ParentType = $ElementType<ResolversParentTypes, 'Query'>> = {
  wikipedia?: Resolver<$ElementType<ResolversTypes, 'Actions'>, ParentType, ContextType, QueryWikipediaArgs>,
};

export type Resolvers<ContextType = APIEmbeddedContext> = {
  Actions?: ActionsResolvers<ContextType>,
  OpenSearchResults?: OpenSearchResultsResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = APIEmbeddedContext> = Resolvers<ContextType>;

import gql from 'graphql-tag';
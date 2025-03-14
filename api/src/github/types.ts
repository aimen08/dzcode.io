import { IsNumber } from "class-validator";

import { GithubUser } from "../app/types/legacy";

export type ListContributorsResponse = Array<{
  author: GithubUser;
  committer: GithubUser;
}>;

export type ListRepositoryContributorsResponse = Array<GithubUser & { contributions: number }>;

export interface GeneralGithubQuery {
  owner: string;
  repo: string;
  path: string;
}

export interface GetUserInput {
  username: string;
}

export interface GitHubUserApiResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubListRepositoryIssuesInput {
  owner: string;
  repo: string;
}

export type GitHubListRepositoryLanguagesInput = GitHubListRepositoryIssuesInput;

export interface GitHubRateLimitApiResponse {
  resources: {
    core: {
      limit: number;
      remaining: number;
      reset: number;
      used: number;
    };
    search: {
      limit: number;
      remaining: number;
      reset: number;
      used: number;
    };
    graphql: {
      limit: number;
      remaining: number;
      reset: number;
      used: number;
    };
    integration_manifest: {
      limit: number;
      remaining: number;
      reset: number;
      used: number;
    };
    code_scanning_upload: {
      limit: number;
      remaining: number;
      reset: number;
      used: number;
    };
  };
  rate: {
    limit: number;
    remaining: number;
    reset: number;
    used: number;
  };
}

export class GetRateLimitResponseDto {
  @IsNumber()
  limit!: number;

  @IsNumber()
  used!: number;

  @IsNumber()
  ratio!: number;
}

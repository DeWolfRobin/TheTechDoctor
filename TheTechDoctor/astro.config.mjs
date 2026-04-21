import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY ?? "";
const [owner, repo] = repository.split("/");
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPagesRepo = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const base = isGithubActions && !isUserOrOrgPagesRepo && repo ? `/${repo}/` : "/";
const site = owner ? `https://${owner}.github.io${isUserOrOrgPagesRepo ? "/" : `/${repo}/`}` : undefined;

export default defineConfig({
  site,
  base,
  server: {
    port: 4321,
    host: true
  }
});

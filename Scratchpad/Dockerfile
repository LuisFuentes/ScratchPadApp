
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
 
FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Scratchpad.csproj", "Scratchpad/"]
RUN dotnet restore "Scratchpad/Scratchpad.csproj"
WORKDIR "/src/Scratchpad"
COPY . .
RUN dotnet build "Scratchpad.csproj" -c Release -o /app/build
 
FROM build AS publish
RUN dotnet publish "Scratchpad.csproj" -c Release -o /app/publish
 
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet Scratchpad.dll
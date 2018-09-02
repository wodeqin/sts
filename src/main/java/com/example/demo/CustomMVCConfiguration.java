package com.example.demo;

import java.nio.charset.Charset;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class CustomMVCConfiguration implements  WebMvcConfigurer {
	@Value("${img.storage}")
    private String mImagesPath;
	
	@Bean
    public HttpMessageConverter<String> responseBodyConverter() {
        StringHttpMessageConverter converter = new StringHttpMessageConverter(
                Charset.forName("UTF-8"));
        return converter;
    }

    @Override
    public void configureMessageConverters(
            List<HttpMessageConverter<?>> converters) {        
        converters.add(responseBodyConverter());
    }

    @Override
    public void configureContentNegotiation(
            ContentNegotiationConfigurer configurer) {
        configurer.favorPathExtension(false);
    }
    
    /*资源处理器 */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
    	
    	if(mImagesPath.equals("") || mImagesPath.equals("${cbs.imagesPath}")){
            String imagesPath = CustomMVCConfiguration.class.getClassLoader().getResource("").getPath();
            if(imagesPath.indexOf(".jar")>0){
            	imagesPath = imagesPath.substring(0, imagesPath.indexOf(".jar"));
            	
            }else if(imagesPath.indexOf("classes")>0){
            	imagesPath = "file:"+imagesPath.substring(0, imagesPath.indexOf("classes"));
            }
            
            imagesPath = imagesPath.substring(0, imagesPath.lastIndexOf("/"))+"/images/";
            mImagesPath = imagesPath;
         }       
           registry.addResourceHandler("/images/**").addResourceLocations(mImagesPath);       
    
       //registry.addResourceHandler("/img/**").addResourceLocations("/WEB-INF/"+"/img/");
       //registry.addResourceHandler("/static/**").addResourceLocations("/WEB-INF/"+"/static/");
    }
}

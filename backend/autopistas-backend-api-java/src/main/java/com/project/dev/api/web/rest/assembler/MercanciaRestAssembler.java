/*
 * @fileoverview    {MercanciaRestAssembler}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.MercanciaDTO;
import com.project.dev.api.web.rest.MercanciaRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code MercanciaRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class MercanciaRestAssembler implements RepresentationModelAssembler<MercanciaDTO, EntityModel<MercanciaDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<MercanciaDTO> toModel(MercanciaDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MercanciaRest.class).getEntity(String.valueOf(entityDTO.getIntIdMercancia()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MercanciaRest.class).getAllEntities()).withRel("Mercancia"));
    }
}
